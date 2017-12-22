import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  CourseService
} from '@app/course/services/course.service';
import {
  Course
} from '@app/course/models/course';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  constructor(
    private courseService: CourseService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.courseService.getCouser()
                      .subscribe((res: Course[]) => {
                        this.courses = res;
                        this.cdr.markForCheck();
                      });
  }

}
