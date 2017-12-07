import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { CourseService } from '@app/courses/services/course.service';
import { Course } from '@app/courses/model/courses';
import { Category } from '@app/categories/model/category';
import { Strategy } from '@app/courses/model/strategy';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  courses: Course[];
  categories: Category[];
  strategies: Strategy[];
  constructor(
    private cdr: ChangeDetectorRef,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.courseService.getCategory()
                      .map(res => this.categories = res)
                      .switchMap((res: Category[]) =>
                        this.courseService.getCoursesByCategory(res)
                      )
                      .subscribe((result) => {
                        this.courses = result;
                        this.cdr.markForCheck();
                      });
    this.courseService.getStrategies().subscribe( (strategies) => {
      this.strategies = strategies;
    });
  }

}
