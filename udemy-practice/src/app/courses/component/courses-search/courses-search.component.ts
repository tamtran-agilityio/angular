import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import {
  ActivatedRoute,
  Params
} from '@angular/router';
import { CourseService } from '@app/courses/service/course.service';
import { Course } from '@app/courses/modal/course';

@Component({
  selector: 'courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent implements OnInit {

  termSearch: string = '';
  courses: Course[];
  constructor(private router: ActivatedRoute,
              private courseService: CourseService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.router.queryParams.subscribe((params: Params) => {
      this.termSearch = params.q;
      this.courseService.getCourseLikeName(params.q).subscribe(res => {
        this.courses = res;
      });
      this.cdr.markForCheck();
    });
  }

}
