import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import * as _ from 'lodash';

import { Carousel } from '../../../carousel/modal/carousel';
import { CourseService } from '../../service/course.service';
import { Course } from '../../modal/course';
import { CategoryService } from '../../../categories/service/category.service';
import { Category } from '../../../categories/modal/category';
import { isEmpty } from 'rxjs/operator/isEmpty';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  carouselOptions: Carousel;
  @Input() courses: Course[];
  categories: Category[];
  constructor(private courseService: CourseService,
              private categoryService: CategoryService) {}

  ngOnInit() {

    this.carouselOptions = {
      grid: {xs: 1, sm: 3, md: 4, lg: 5, xl: 6, all: 0},
      slide: 2,
      speed: 400,
      point: {
        visible: false
      },
      load: 2,
      touch: true
    };
  }

  onLoad($event) {
    console.log($event);
  }

  getNameCategory(index: number) {
    let categoryName = '';
    if (!_.isEmpty(this.categories)) {
      _.each(this.categories, (category: Category, id: number) => {
        if (id === index) {
          categoryName = category.title;
        }
      });
    }
    return categoryName;
  }
}
