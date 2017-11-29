import { Injectable } from '@angular/core';

import * as _ from 'lodash';
import { Course } from '@app/courses/modal/course';

@Injectable()
export class HelperService {

  constructor() { }

  getLocalStorage(item: string) {
    return JSON.parse(localStorage.getItem(item));
  }

  setLocalStorage(item: string, data: any) {
    return localStorage.setItem(item, data);
  }

  getShortName(value: string) {
    return value.split(' ').reduce(function(previous, current){
      return {name : previous.name + ' ' + current[0]};
    }, {name : ''});
  }

  customCourses(courses: any) {
    let course: Course;
    return _.map(courses, (item) => {
      course = item.course;
      course.teacher = item.teacher;
      return course;
    });
  }
}
