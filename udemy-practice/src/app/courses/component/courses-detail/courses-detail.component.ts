import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

import { Course } from '@app/courses/modal/course';
import { Chapter } from '@app/courses/modal/chapter';
import { CourseService } from '@app/courses/service/course.service';
import { CourseItem } from '@app/courses/modal/course-item';

@Component({
  selector: 'courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
  name: String;
  courseItem: CourseItem = {
    course: null,
    courses: [],
    chapters: [],
    active: false,
    countLecture: 0
  };
  constructor(private route: ActivatedRoute,
              private cdr: ChangeDetectorRef,
              private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseService.getCourseByName(params.name).subscribe((res) => {
        let cloned = _.cloneDeep(this.courseItem);
        cloned.course = _.first(res);
        this.courseItem = cloned;
        this.getCoursesComparion(cloned.course);
        this.getChapters(cloned.course);
        this.cdr.markForCheck();
      });
    });
  }

  getCoursesComparion(course) {
    this.courseService.getCoursesComparison(course.topicId).subscribe((courses: Course[]) => {
      let cloned = _.cloneDeep(this.courseItem);
      cloned.courses = courses;
      this.courseItem = cloned;
    });
  }

  getChapters(course) {
    this.courseService.getChapter(course.id).subscribe((coursesCurriculum: any) => {
      this.courseService.getPartByChapters(coursesCurriculum.chapters).subscribe(chapter => {
        let cloned = _.cloneDeep(this.courseItem);
        cloned.chapters = chapter;
        cloned.countLecture = this.getTotalLecture(chapter);
        this.courseItem = cloned;
      });
    });
  }

  getTotalLecture(chapters: Chapter[]): number {

    if (!_.isNil(chapters)) {
      let count = 0;
      _.each(chapters, (chapter) => {
        count += chapter.parts.length;
      });
      return count;
    }
  }
}
