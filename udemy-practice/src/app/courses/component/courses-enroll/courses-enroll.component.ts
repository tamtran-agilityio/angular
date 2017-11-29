import {
  Component,
  OnInit,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'lodash';

import { Course } from '@app/courses/modal/course';
import { CourseService } from '@app/courses/service/course.service';
import { HelperService } from '@app/core/service/helper.service';
import { User } from '@app/auth/model/use';

@Component({
  selector: 'courses-enroll',
  templateUrl: './courses-enroll.component.html',
  styleUrls: ['./courses-enroll.component.scss']
})
export class CoursesEnrollComponent implements OnInit {
  @Input() course: Course;
  user: User;
  isValid: boolean = false;
  constructor(private courseService: CourseService,
              private helperService: HelperService,
              private router: Router,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    let user = this.helperService.getLocalStorage('user');
    this.user = user;
    if (!_.isNil(user)) {
      this.courseService.getCoursesByUser(this.user).subscribe((res) => {
        if (!_.isEmpty(res)) {
          let coures = res.user_courses;
          _.each(coures, (item: any) => {
            if (item.userId === this.user.id && item.courseId === this.course.id) {
              this.isValid = true;
              this.cdr.markForCheck();
            }
          });
        }
      });
    }
  }

  enrollCourse(course: Course) {
    if (!_.isNil(this.user)) {
      let enrollCourse: any = {
        userId: this.user.id,
        courseId: course.id,
        teacherId: course.teacher.id
      };
      this.courseService.addNewCourse(enrollCourse).subscribe((response) => {
        if (!_.isEmpty(response)) {
          this.router.navigate([`/${course.name}/learn`]);
        }
      });
    }
  }
}
