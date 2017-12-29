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
  createCourse(courses: Course[], course: Course) {
    return courses = _.concat(courses, course);
  }

  /**
   * Handle delete course by id
   */
  deleteCourse(id: any, courses: Course[]) {
    let index = _.findIndex(courses, (course) => {
      return course.id === _.parseInt(id);
    });
    return courses.splice(index, 1);
  }

  /**
   * Handle update courses by course
   */
  updateCourse(courses: Course[], course: Course) {
    let index = _.findIndex(courses, {id: course.id});
    return courses.splice(index, 1, course);
  }

}
