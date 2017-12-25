import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  Course
} from '@app/course/models/course';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() idCourseDelete: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  deleteCourse(id: any) {
    this.idCourseDelete.emit(id);
  }
}
