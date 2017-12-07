import { Injectable } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  Observable
} from 'rxjs/Rx';
import {
  Headers,
  RequestOptions
} from '@angular/http';

import * as _ from 'lodash';

import { HttpWrapperService } from '@app/core/services/http-wrapper.service';
import { Course } from '@app/courses/model/courses';
import { AppConfigService } from '@app/core/services/app-config.service';
import { Category } from '@app/categories/model/category';
import { Strategy } from '@app/courses/model/strategy';

@Injectable()
export class CourseService {

  constructor(
    private httpWrapper: HttpWrapperService,
    private appConfig: AppConfigService
  ) { }

  /**
   * Handle get list category
   */
  getCategory(): Observable<Category[]> {
    let tableCategories = this.appConfig.TABLES.CATEGORIES;

    return Observable.create( obs => {
      this.httpWrapper.get(tableCategories).subscribe((res: Category) => {
        obs.next(res);
      });
    });
  }

  /**
   * Handle get course by category
   * @param categories list category
   */
  getCoursesByCategory(categories: Category[]): Observable<Course[]> {
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

  /**
   * Get course by id comparion with teacher
   * @param id id of course
   */
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

  /**
   * Get strategies of course
   */
  getStrategies(): Observable<Strategy[]> {
    let tableStrategies = this.appConfig.TABLES.STRATEGIES;

    return Observable.create( obs => {
      this.httpWrapper.get(tableStrategies).subscribe((res: Strategy[]) => {
        obs.next(res);
      });
    });
  }
}
