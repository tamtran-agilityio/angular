import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {
  courses: any[];
  constructor() { }

  ngOnInit() {
  }

}
