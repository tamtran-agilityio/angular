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
import {
  CourseHelperService
} from '@app/course/services/course-helper.service';

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
    private courseHelperService: CourseHelperService,
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

  /**
   * Handle delete course
   * @param event
   */
  deleteCourse(event: any) {
    this.courses = this.courseHelperService.deleteCourse(event, this.courses);
    this.courseService.deleteCourse(event);
  }

  /**
   * Handle add new course
   */
  newCourse() {
    const dialogRef = this.dialog.open(AddCourseComponent);
    dialogRef.componentInstance.courseInfor.subscribe(course => {
      course.id = this.courseHelperService.getCourseId();
      this.courseService.createCourse(course);
      this.courses = _.concat(this.courses, course);
      this.cdr.markForCheck();
    });
  }

  updateCourse(event) {
    const dialogRef = this.dialog.open(AddCourseComponent);
    dialogRef.componentInstance.course = event;
    dialogRef.componentInstance.courseInfor.subscribe(course => {
      course.id = event.id;
      this.courseService.updateCourse(course);
      const index = _.findIndex(this.courses, {id: course.id});
      this.courses.splice(index, 1, course);
      this.cdr.markForCheck();
    });
  }
 }
