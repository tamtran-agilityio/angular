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
import { User } from '@app/auth/model/use';
import { Chapter } from '@app/courses/modal/chapter';

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
    let url = this.appConfig.API.API_ROOT + `courses/?name=${name}&_expand=teacher`;
    return Observable.create( obs => {
      this.httpWrapper.get(url, {}).subscribe((res: Course[]) => {
        obs.next(res);
      });
    });
  }

  getCourseByTeacher(teacherId: number): Observable<Course[]> {
    let url = this.appConfig.API.API_ROOT + `courses/?teacherId=${teacherId}&_expand=teacher`;
    return Observable.create( obs => {
      this.httpWrapper.get(url, {}).subscribe((res: Course[]) => {
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
    if (!_.isNil(topicId)) {
      let url = this.appConfig.API.API_ROOT + `topics/${topicId}/courses?_sort=votes&_order=asc`;
      return Observable.create( obs => {
        return this.httpWrapper.get(url , {} ).subscribe( (res: Course[]) => {
          obs.next(res);
        });
      });
    }
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

  getPartByChapters(chapter: Chapter[]): Observable<any> {
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

  addNewCourse(course) {
    let url = this.appConfig.API.API_ROOT + `user_courses`;

    let body = JSON.stringify(course);

    return this.httpWrapper.posts(url, body)
      .map(res => res);
  }

  deleteCourse(id: number) {
    let url = this.appConfig.API.API_ROOT + `courses/${id}`;
    return this.httpWrapper.deletes(url)
               .map(res => res);
  }

  getCoursesByUser(user: User): Observable<any> {
    let url = this.appConfig.API.API_ROOT + `users/${user.id}?_embed=user_courses`;
    return Observable.create( obs => {
      this.httpWrapper.get(url, {}).subscribe( res => {
        obs.next(res);
      });
    });
  }

  getCourseByUser(courseUser: any): Observable<any> {
    return Observable.create( obs => {
      if (!_.isEmpty(courseUser)) {
        this.getMyCourseById(1)
          .switchMap((response: any) => {
            let subServices = [];
            _.each(courseUser, (item) => {
              subServices.push(this.getMyCourseById(item.id));
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

  getMyCourseById(id: number) {
    let url = this.appConfig.API.API_ROOT + `user_courses/${id}?_expand=user&_expand=course&_expand=teacher`;
    return this.httpWrapper.get(url, {})
                           .map(res => res);
  }

  getCourseLikeName(name: string): Observable<Course[]> {
    let url = this.appConfig.API.API_ROOT + `courses/?name_like=${name}&_expand=teacher`;
    return Observable.create( obs => {
      this.httpWrapper.get(url, {}).subscribe(res => {
        obs.next(res);
      });
    });
  }

  addCourse(course: any) {
    let url = this.appConfig.API.API_ROOT + 'courses';
    let body = JSON.stringify(course);
        return this.httpWrapper.posts(url, body)
          .map(res => res);
  }
}
