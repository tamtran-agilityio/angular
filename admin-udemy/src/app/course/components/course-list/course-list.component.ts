import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import * as _ from 'lodash';
import {
  MatDialog
} from '@angular/material';

import {
  CourseService
} from '@app/course/services/course.service';
import {
  Course
} from '@app/course/models/course';
import {
  AddCourseComponent
} from '@app/course/components/add-course/add-course.component';

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
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
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

  newCourse() {

    const dialogRef = this.dialog.open(AddCourseComponent);
    dialogRef.componentInstance.course.subscribe(course => {
      this.courseService.createCourse(course);
    });
  }
 }
