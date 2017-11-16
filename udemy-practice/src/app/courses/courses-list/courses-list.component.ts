import { Component, OnInit } from '@angular/core';

import { Carousel } from '../carousel/modal/carousel';
import { CourseService } from '../service/course.service';
import { Course } from '../modal/course';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  carouselOptions: Carousel;
  courses: Course[];
  carouselTileItems: Array<any>;
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(res => {
      this.courses = res;
      console.log('res', res);
    });
    this.carouselOptions = {
      grid: {xs: 1, sm: 3, md: 4, lg: 5, xl: 6, all: 0},
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: false,
      custom: 'banner'
    };
  }

  onLoad($event) {
    console.log($event);
  }
}
