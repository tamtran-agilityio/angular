import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Course } from '@app/courses/model/courses';
import { Category } from '@app/categories/model/category';

@Component({
  selector: 'course-carousel',
  templateUrl: './course-carousel.component.html',
  styleUrls: ['./course-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCarouselComponent implements OnInit {
  @Input() courses: Course[];
  @Input() categories: Category[];
  constructor() { }

  ngOnInit() {
  }

}
