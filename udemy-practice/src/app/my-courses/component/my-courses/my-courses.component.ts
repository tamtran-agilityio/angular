import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import * as _ from 'lodash';

import { HelperService } from '@app/core/service/helper.service';
import { CourseService } from '@app/courses/service/course.service';

@Component({
  selector: 'my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  courses: any[];
  constructor(private helperService: HelperService,
              private courseService: CourseService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    let user = this.helperService.getLocalStorage('user');

    if (!_.isNil(user)) {
      this.courseService.getCoursesByUser(user).subscribe((res) => {
        this.courseService.getCourseByUser(res.user_courses).subscribe( (courses: any) => {
          this.courses = this.helperService.customCourses(courses);
          this.cdr.markForCheck();
        });
      });
    }
  }

}
