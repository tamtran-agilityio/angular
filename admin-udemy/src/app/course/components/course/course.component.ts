import {
  Component,
  OnInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  Course
} from '@app/course/models/course';
import {
  LoggerDecorator
} from '@app/core/decorators/logger.decorator';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@LoggerDecorator()
export class CourseComponent implements OnInit, OnChanges {
  @Input() course: Course;
  @Output() idCourseDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output() courseEdit: EventEmitter<Course> = new EventEmitter<Course>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  deleteCourse(id: any) {
    this.idCourseDelete.emit(id);
  }

  updateCourse(course: Course) {
    this.courseEdit.emit(course);
  }
}
