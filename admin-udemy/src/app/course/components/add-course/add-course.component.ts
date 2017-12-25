import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

import {
  Course
} from '@app/course/models/course';

@Component({
  selector: 'add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit {
  courseForm: FormGroup;
  imageSrc: string = '';
  @Output() course: EventEmitter<Course> = new EventEmitter<Course>();
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      subTitle: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      discountPrice: ['', Validators.compose([Validators.required])],
      image: ['']
    });
  }

  /**
   * Handle add data image course
   */
  imageSelecter(event) {
    this.courseForm.value.image = event;
  }

  /**
   * Handle save new course
   */
  saveCourse() {
    if (this.courseForm.valid) {
      this.course.emit(this.courseForm.value);
    }
  }

}
