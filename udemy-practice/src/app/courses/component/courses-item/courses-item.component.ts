import { Component, OnInit, Input } from '@angular/core';

import { Course } from '@app/courses/modal/course';

@Component({
  selector: 'courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.scss']
})
export class CoursesItemComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

}
