import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

import * as _ from 'lodash';

import { HttpWrapperService, AppConfigService } from '../../core';
import { Course } from '../modal/course';
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

}
