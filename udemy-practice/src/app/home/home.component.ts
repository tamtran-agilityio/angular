import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

import { LoggerService } from '../core';
import { UserService } from '../auth/service/user.service';
import { Topic } from '../categories/modal/topic';
import { CategoryService } from '../categories/service/category.service';
import { Category } from '../categories/modal/category';
import { Course, CourseService } from '@app/courses';
import { Collection } from '../collection/modal/collection';
import { CollectionService } from '../collection/service/collection.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collectionsData: Collection[];
  topicData: Topic[];
  categories: Category[];
  coursesData: Course[];
  constructor(private logger: LoggerService,
              private userService: UserService,
              private collectionService: CollectionService,
              private categoryService: CategoryService,
              private courseService: CourseService) { }

  ngOnInit() {
    this.collectionService.getCollection().subscribe((res: Collection[]) => {
      this.collectionsData = res;
    });
    this.categoryService.getCategories().subscribe((res: any) => {
      this.categories = res;
      this.courseService.getCoursesByCategory(res).subscribe( (course) => {
        this.coursesData = course;
      });
    });
  }
}
