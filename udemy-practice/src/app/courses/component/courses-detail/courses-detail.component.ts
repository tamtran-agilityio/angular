import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

import { CourseService } from '../../service/course.service';
import { Course } from '../../modal/course';
import { concat } from 'rxjs/operator/concat';

@Component({
  selector: 'courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  name: String;
  course: Course;
  coursesComparion: Course[];
  starsCount: number;
  chapters: any[];
  constructor(private route: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseService.getCourseByName(params.name).subscribe((res) => {
        this.course = _.first(res);
        this.courseService.getCoursesComparison(_.first(res).topicId).subscribe((courses: Course[]) => {
          this.coursesComparion = courses;
        });
        this.courseService.getChapter(_.first(res).id).subscribe((coursesCurriculum: any) => {
          this.courseService.getPartByChapters(coursesCurriculum.chapters).subscribe(chapter => {
            this.chapters = chapter;
          });
        });
      });
    });
  }
}
