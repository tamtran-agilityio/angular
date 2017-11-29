import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Course } from '@app/courses/modal/course';

@Component({
  selector: 'courses-search-item',
  templateUrl: './courses-search-item.component.html',
  styleUrls: ['./courses-search-item.component.scss']
})
export class CoursesSearchItemComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

}
