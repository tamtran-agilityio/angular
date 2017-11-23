import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

import { CourseService } from '../../service/course.service';
import { Course } from '../../modal/course';

@Component({
  selector: 'courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  name: String;
  course: Course;
  starsCount: number;
  constructor(private route: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseService.getCourseByName(params.name).subscribe((res) => {
        console.log('res', res);
        this.course = _.first(res);
      });
    });
  }

}
