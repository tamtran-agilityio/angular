import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import * as _ from 'lodash';

import { Course } from '@app/courses/modal/course';
import { CourseService } from '@app/courses/service/course.service';
import { HelperService } from '@app/core/service/helper.service';

@Component({
  selector: 'courses-enroll',
  templateUrl: './courses-enroll.component.html',
  styleUrls: ['./courses-enroll.component.scss']
})
export class CoursesEnrollComponent implements OnInit {
  @Input() course: Course;
  constructor(private courseService: CourseService,
              private helperService: HelperService) { }

  ngOnInit() {
  }

  enrollCourse(course: Course) {
    let user = this.helperService.getLocalStorage('user');
    console.log('user', user);
    if (!_.isNil(user)) {
      let enrollCourse: any = {
        userId: user.id,
        courseId: course.id
      };
    this.courseService.joinNewCourse(enrollCourse).subscribe((res) => {
    });
    }
  }

}
