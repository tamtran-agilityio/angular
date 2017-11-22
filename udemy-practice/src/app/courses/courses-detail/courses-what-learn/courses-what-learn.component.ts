import {
  Component,
  OnInit,
  Input
 } from '@angular/core';

 import { Course } from '../../modal/course';

@Component({
  selector: 'courses-what-learn',
  templateUrl: './courses-what-learn.component.html',
  styleUrls: ['./courses-what-learn.component.scss']
})
export class CoursesWhatLearnComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

}
