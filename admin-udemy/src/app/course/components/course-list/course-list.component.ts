import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import * as _ from 'lodash';

import {
  CourseService
} from '@app/course/services/course.service';
import {
  Course
} from '@app/course/models/course';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.courseService.getCourse()
                      .subscribe((courses: Course[]) => {
                        this.courses = courses;
                        this.cdr.markForCheck();
                      });
  }

  deleteCourse(event: any) {
    const courses = _.remove(this.courses, (course) => {
      return course.id === _.parseInt(event);
    });
    this.courseService.deleteCourse(event);
  }
}
