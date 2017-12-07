import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'course-popular',
  templateUrl: './course-popular.component.html',
  styleUrls: ['./course-popular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursePopularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
