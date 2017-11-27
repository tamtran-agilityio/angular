import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Course } from '../../modal/course';

@Component({
  selector: 'courses-introduction',
  templateUrl: './courses-introduction.component.html',
  styleUrls: ['./courses-introduction.component.scss']
})
export class CoursesIntroductionComponent implements OnInit {
  @Input() course: Course;
  constructor() {}

  ngOnInit() {
  }

}
