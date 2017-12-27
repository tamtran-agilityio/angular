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
  MatDialogRef
} from '@angular/material';

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
  src: string;
  course: Course;

  @Output() courseInfor: EventEmitter<Course> = new EventEmitter<Course>();

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddCourseComponent>
  ) { }

  ngOnInit() {
    this.validationCourse();

    if (this.course) {
      this.courseForm.setValue({
        title: this.course.title,
        subtitle: this.course.subtitle,
        price: this.course.price,
        discountPrice: this.course.discountPrice,
        image: this.course.image
      });
      this.src = this.course.image;
    }
  }

  /**
   * Handle validations course
   */
  validationCourse() {
    this.courseForm = this.fb.group({
      title: ['', Validators.compose([Validators.required])],
      subtitle: ['', Validators.compose([Validators.required])],
      price: ['', Validators.compose([Validators.required])],
      discountPrice: ['', Validators.compose([Validators.required])],
      image: ['']
    });
  }

  /**
   * Handle add data image course
   */
  imageChange(event) {
    this.courseForm.patchValue({
      image: event
    });
  }

  /**
   * Handle save new or update course
   */
  saveCourse() {
    if (this.courseForm.valid) {
      let course: any = {
        title: this.courseForm.value.title,
        subtitle: this.courseForm.value.subtitle,
        price: this.courseForm.value.price,
        discountPrice: this.courseForm.value.discountPrice,
        image: this.courseForm.value.image
      };
      this.courseInfor.emit(course);
      this.dialogRef.close();
    }
  }

}
