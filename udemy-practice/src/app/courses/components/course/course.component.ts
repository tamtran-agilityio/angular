import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectionStrategy
} from '@angular/core';

import { Course } from '@app/courses/model/courses';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit, OnChanges {
  @Input() course: Course[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
