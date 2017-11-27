import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Course } from '@app/courses/modal/course';

@Component({
  selector: 'courses-about-instructor',
  templateUrl: './courses-about-instructor.component.html',
  styleUrls: ['./courses-about-instructor.component.scss']
})
export class CoursesAboutInstructorComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

}
