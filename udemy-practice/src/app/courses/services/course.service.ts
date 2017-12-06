import { Injectable } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  Observable
} from 'rxjs/Rx';
import { Headers } from '@angular/http';

import * as _ from 'lodash';

import { HttpWrapperService } from '@app/core/services/http-wrapper.service';
import { Course } from '@app/courses/model/courses';
import { AppConfigService } from '@app/core/services/app-config.service';
import { Category } from '@app/categories/model/category';

@Injectable()
export class CourseService {

  constructor(
    private httpWrapper: HttpWrapperService,
    private appConfig: AppConfigService
  ) { }

  getCategory(): Observable<Category[]> {
    let headers = new Headers(),
      tableCategories = this.appConfig.TABLES.CATEGORIES,
      options = {
        headers: headers
      };

    return Observable.create( obs => {
      this.httpWrapper.get(tableCategories, options).subscribe((res: Category) => {
        obs.next(res);
      });
    });
  }

  getCoursesByCategory(categories: Category[]): Observable<any> {
    return Observable.create( obs => {
      if (!_.isEmpty(categories)) {
        this.getCoursesByCategoryId(_.first(categories).id)
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
    let headers = new Headers(),
        tableCourse = this.appConfig.TABLES.COURSES,
        tableTeacher = this.appConfig.TABLES.TEACHER,
        options = null;
        headers.append('categoryId', `${id}`);
        headers.append('_expand', tableTeacher);
        options = {
          headers: headers
        };
    return this.httpWrapper.get(tableCourse, options)
      .map(res => res);
  }
}
