import {
  Injectable
} from '@angular/core';

import * as _ from 'lodash';

import {
  Course
} from '@app/course/models/course';

@Injectable()
export class CourseHelperService {

  constructor() { }

  /**
   * Get id course
   */
  getCourseId() {
    return _.now();
  }

  /**
   * Handle delete course by id
   */
  deleteCourse(id: any, courses: Course[]) {
    _.remove(courses, (course) => {
      return course.id === _.parseInt(course);
    });
    return courses;
  }

}
