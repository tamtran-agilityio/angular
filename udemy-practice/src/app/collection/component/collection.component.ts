import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

import { CollectionService } from '../service/collection.service';
import { Collection } from '../modal/collection';
import { CategoryService } from '@app/categories/service/category.service';
import { CourseService } from '@app/courses/service/course.service';
import { Course } from '@app/courses/modal/course';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collection: Collection;
  coursesData: Course[];
  constructor(private route: ActivatedRoute,
              private collectionService: CollectionService,
              private categoryService: CategoryService,
              private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.collectionService.getCollectionByName(params.name).subscribe((res: any) => {
        this.collection = _.first(res);
      });
    });

    this.categoryService.getCategories().subscribe((res: any) => {
      // this.categories = res;
      this.courseService.getCoursesByCategory(res).subscribe( (course) => {
        this.coursesData = course;
        console.log('course', course);
      });
    });
  }

}
