import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import * as _ from 'lodash';

import { Carousel } from '@app/carousel/modal/carousel';
import { Course } from '@app/courses/modal/course';
import { Category } from '@app/categories/modal/category';
import { CourseService } from '@app/courses/service/course.service';
import { CategoryService } from '@app/categories/service/category.service';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  carouselOptions: Carousel;
  @Input() courses: Course[];
  @Input() categories: Category[];
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
      touch: true,
      easing: 'ease'
    };
  }

  onLoad($event) {
    console.log($event);
  }

  getNameCategory(item: any) {
    let course = _.first(item);
    let categoryTitle = '';
    _.each(this.categories, (category) => {
      if (category.id === course.categoryId) {
        categoryTitle =  category.title;
      }
    });
    return categoryTitle;
  }
}