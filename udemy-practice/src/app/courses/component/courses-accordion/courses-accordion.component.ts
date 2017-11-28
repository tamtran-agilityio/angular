import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { CourseItem } from '@app/courses/modal/course-item';

@Component({
  selector: 'courses-accordion',
  templateUrl: './courses-accordion.component.html',
  styleUrls: ['./courses-accordion.component.scss']
})
export class CoursesAccordionComponent implements OnInit {
  @Input() courseItem: CourseItem;
  constructor() { }

  ngOnInit() {
  }

  allCollapse(event) {
    this.courseItem.active = !this.courseItem.active;
  }

}
