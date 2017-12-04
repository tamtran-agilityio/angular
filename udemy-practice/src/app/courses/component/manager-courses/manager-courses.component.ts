import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { Course } from '@app/courses/modal/course';
import { HelperService } from '@app/core/service/helper.service';
import { CourseService } from '@app/courses/service/course.service';

@Component({
  selector: 'manager-courses',
  templateUrl: './manager-courses.component.html',
  styleUrls: ['./manager-courses.component.scss']
})
export class ManagerCoursesComponent implements OnInit {
  courses: Course[];
  constructor(private helpService: HelperService,
              private courseService: CourseService) { }

  ngOnInit() {
    let user = this.helpService.getLocalStorage('user');
    if (!_.isNil(user)) {
      this.courseService.getCourseByTeacher(user.id).subscribe(res => {
        this.courses = res;
      });
    }
  }

  deleteCourse(course: Course) {
    this.courseService.deleteCourse(course.id).subscribe(res => {
      if (_.isNil(res)) {
        location.reload();
      }
    });
  }

}