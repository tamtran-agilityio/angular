import { Injectable } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  Observable
} from 'rxjs/Rx';

import * as _ from 'lodash';

import { HttpWrapperService, AppConfigService } from '../../core';
import { Course } from '../modal/course';
import { Category } from '../../shared/dropdown/modal/category';


@Injectable()
export class CourseService {
  courses$: Subject<any> = new BehaviorSubject<any>([]);

  constructor(private httpWrapper: HttpWrapperService,
              private appConfig: AppConfigService) { }

  getCourses(): Observable<Course[]> {
    let url = this.appConfig.API + 'courses/';
    return Observable.create( obs => {
      this.httpWrapper.get(url, {}).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getCoursesByCategory(categories: Category[]): Observable<any> {
    return Observable.create( obs => {
      if (!_.isEmpty(categories)) {
        this.getCoursesByCategoryId(0)
          .switchMap((response: any) => {
            let subServices = [];
            _.each(categories, (category: Category) => {
              let categoryName = category.title;
              subServices.push(this.getCoursesByCategoryId(category.id));
            });
            return Observable.zip(...subServices, (...res) => {
              return res;
            });
          })
          .subscribe(res => {
            obs.next(res);
          });
      }
    });
  }

  getCoursesByCategoryId(id: number) {
    let url = this.appConfig.API + `courses/?categoriesId=${id}`;
    return this.httpWrapper.get(url, {})
      .map(res => res);
  }
}
