import {
  Injectable
} from '@angular/core';
import {
  Headers
} from '@angular/http';

import {
  Observable
} from 'rxjs/Observable';

import {
  HttpWrapperService
} from '@app/core/services/http-wrapper.service';
import {
  Course
} from '@app/course/models/course';
import {
  AppConfigService
} from '@app/core/services/app-config.service';

@Injectable()
export class CourseService {

  private courseTable = '';
  constructor(
    private httpWrapper: HttpWrapperService,
    private appConfig: AppConfigService
  ) {
    this.courseTable = this.appConfig.API_URLS.COURSES;
  }

  /**
   * Get all course
   */
  getCourse(): Observable<Course[]> {
    const headers: Headers = new Headers();
    const tableTeacher = this.appConfig.API_URLS.TEACHER;
    headers.append('_expand', tableTeacher);
    const options = {
      headers: headers
    };
    return this.httpWrapper.get(this.courseTable, options);
  }

  deleteCourse(id) {
    const path = this.courseTable + id;
    return this.httpWrapper.delete(path)
                           .subscribe( res => {});
  }

}
