import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { Strategy } from '@app/courses/model/strategy';

@Component({
  selector: 'course-strategy',
  templateUrl: './course-strategy.component.html',
  styleUrls: ['./course-strategy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseStrategyComponent implements OnInit {
  @Input() strategies: Strategy[];
  constructor() { }

  ngOnInit() {
  }

}
