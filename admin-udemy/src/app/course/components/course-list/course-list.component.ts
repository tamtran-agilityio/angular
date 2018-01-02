import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  ObservableMedia
} from '@angular/flex-layout';
import {
  MatDialog
} from '@angular/material';

import * as _ from 'lodash';
import {
  Observable
} from 'rxjs/Observable';

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
import {
  AutoUnsubscribe
} from '@app/core/decorators/autounsubscribe.decorator';
import {
  AppConfigService
} from '@app/core/services/app-config.service';
import {
  LoggerDecorator
} from '@app/core/decorators/logger.decorator';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@AutoUnsubscribe()
@LoggerDecorator()
export class CourseListComponent implements OnInit {
  courses: Course[];
  cols: Observable<any>;

  constructor(
    private courseService: CourseService,
    private observableMedia: ObservableMedia,
    private courseHelperService: CourseHelperService,
    private appConfig: AppConfigService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.courseService.getCourse()
                      .subscribe((courses: Course[]) => {
                        this.courses = courses;
                        this.cdr.markForCheck();
                      });
    this.changeGird();
  }

  /**
   * Handle delete course
   * @param event
   */
  deleteCourse(event: any) {
    this.courseHelperService.deleteCourse(event, this.courses);
    this.courseService.deleteCourse(event);
  }

  /**
   * Handle add new course
   */
  newCourse() {
    let dialogRef = this.dialog.open(AddCourseComponent);
    dialogRef.componentInstance.courseInfor.subscribe(course => {
      course.id = this.courseHelperService.getCourseId();
      this.courseService.createCourse(course);
      this.courses = this.courseHelperService.createCourse(this.courses, course);
      this.cdr.markForCheck();
    });
  }

  /**
   * Handle update course
   * @param event the course need to update
   */
  updateCourse(event) {
    let dialogRef = this.dialog.open(AddCourseComponent);
    dialogRef.componentInstance.course = event;
    dialogRef.componentInstance.courseInfor.subscribe((course: any) => {
      course.id = event.id;
      this.courseService.updateCourse(course);
      this.courseHelperService.updateCourse(this.courses, course);
      this.cdr.markForCheck();
    });
  }

  /**
   * Handle change number cols on gird list
   */
  changeGird() {
    let grid = new Map(this.appConfig.GRID_LIST);
    let start: number;
    _.each(grid, (cols: number, mqAlias: string) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start = cols;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return grid.get(change.mqAlias);
      })
      .startWith(start);
  }
 }
