import {
  Injectable
} from '@angular/core';
import {
  Headers,
  URLSearchParams
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

  /**
   * Handle delete course by id
   * @param id the number id need to delete
   */
  deleteCourse(id) {
    const path = this.courseTable + id;
    return this.httpWrapper.delete(path)
                           .subscribe( res => {});
  }

  /**
   * Handle new course
   * @param course infor of course
   */
  createCourse(course: Course) {
    this.httpWrapper.post(this.courseTable, JSON.stringify(course))
                    .subscribe((res) => {});
  }

  /**
   * Handle update course
   * @param course infor course need to update
   */
  updateCourse(course: Course) {
    const path = this.courseTable + course.id;
    this.httpWrapper.patchs(path, JSON.stringify(course))
                    .subscribe((res) => {});
  }

}
