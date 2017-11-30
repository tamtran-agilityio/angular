import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import * as _ from 'lodash';

import { HelperService } from '@app/core/service/helper.service';
import { CourseService } from '@app/courses/service/course.service';
import { Course } from '@app/courses/modal/course';

@Component({
  selector: 'app-my-learn',
  templateUrl: './my-learn.component.html',
  styleUrls: ['./my-learn.component.scss']
})
export class MyLearnComponent implements OnInit {
  courses: Course[];
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
