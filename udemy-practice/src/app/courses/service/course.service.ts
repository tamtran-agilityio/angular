import { Injectable } from '@angular/core';
import {
  Subject,
  BehaviorSubject,
  Observable
} from 'rxjs/Rx';

import * as _ from 'lodash';

import { HttpWrapperService, AppConfigService } from '@app/core';
import { Course } from '../modal/course';
import { Category } from '../../categories/modal/category';

@Injectable()
export class CourseService {
  courses$: Subject<any> = new BehaviorSubject<any>([]);

  constructor(private httpWrapper: HttpWrapperService,
              private appConfig: AppConfigService) { }

  getCourses(): Observable<Course[]> {
    let url = this.appConfig.API.API_ROOT + 'courses/';
    return Observable.create( obs => {
      this.httpWrapper.get(url, {}).subscribe(res => {
        obs.next(res);
      });
    });
  }

  getCourseByName(name: string): Observable<Course[]> {
    console.log('name', name);
    let url = this.appConfig.API.API_ROOT + `courses/?name=${name}&_expand=teacher`;
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
    let url = this.appConfig.API.API_ROOT + `courses/?categoryId=${id}&_expand=teacher`;
    return this.httpWrapper.get(url, {})
      .map(res => res);
  }

  getCoursesComparison(topicId: number): Observable<Course[]> {
    let url = this.appConfig.API.API_ROOT + `topics/${topicId}/courses?_sort=votes&_order=asc`;
    return Observable.create( obs => {
      return this.httpWrapper.get(url , {} ).subscribe( (res: Course[]) => {
        obs.next(res);
      });
    });
  }

  getChapter(id: number): Observable<any> {
    let url = this.appConfig.API.API_ROOT + `courses/${id}?_embed=chapters`;
    return Observable.create( obs => {
      return this.httpWrapper.get(url, {})
      .map(res => res)
      .subscribe((res: any) => {
        obs.next(res);
      });
    });
  }

  getPartByChapterId(id: number) {
    let url = this.appConfig.API.API_ROOT + `chapters/${id}?_embed=parts`;
    return this.httpWrapper.get(url, {})
                .map(res => res);
  }

  getPartByChapters(chapter: any): Observable<any> {
    return Observable.create( obs => {
      if (!_.isEmpty(chapter)) {
        this.getPartByChapterId(1)
          .switchMap((response: any) => {
            let subServices = [];
            _.each(chapter, (item) => {
              subServices.push(this.getPartByChapterId(item.id));
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

  joinNewCourse(course) {
    let url = this.appConfig.API.API_ROOT + `user_course`;

    let body = JSON.stringify(course);

    return this.httpWrapper.posts(url, body)
      .map(res => res);
  }
}
