import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { CategoryService } from '@app/categories/service/category.service';
import { CourseService } from '@app/courses/service/course.service';
import { Category } from '@app/categories/modal/category';
import { Topic } from '@app/categories/modal/topic';
import { ValidationService } from '@app/core/service/validation.service';

@Component({
  selector: 'add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit {
  categories: Category[];
  topics: Topic[];
  categorySelected: number;
  topicSelected: number;

  addCourse: FormGroup;
  constructor(private categoryService: CategoryService,
              private courseService: CourseService,
              private cdr: ChangeDetectorRef,
              private formBuilder: FormBuilder,
              private validationService: ValidationService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
      this.topics = this.categories[1].topics;
      this.categorySelected = this.categories[1].id;
      this.topicSelected = this.categories[1].topics[0].id;
      this.cdr.markForCheck();
    });

    this.addCourse = this.formBuilder.group({
      'category': ['', Validators.required],
      'topic': ['', Validators.required],
      'title': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'subtitle': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'images': ['', Validators.compose([Validators.required, this.validationService.validateExt])],
      'learn': [''],
      'desc': [''],
      'type': ['', Validators.required],
      'requirements': ['', Validators.required],
      'rating': [''],
      'price': [''],
      'discount': [''],
      'date': [''],
      'language': ['', Validators.required],
    });

  }

  onChange(event) {
    let images = event.srcElement.files;
    this.addCourse.value.images = images;
    console.log('file', images , event);
  }

  onSelectCategory(event) {
    let categoryId = +event.target.value;
    this.topicSelected = this.categories[categoryId - 1].topics[0].id;
    this.topics = this.categories[categoryId - 1].topics;
    this.cdr.markForCheck();
  }

  onSelectTopic(event) {
    let topicId = +event.target.value;
  }

  selectLanguage(event) {
    let language = +event.target.value;
  }

  selectType(event) {
    let species = +event.target.value;
  }

  submitForm(value: any) {
    console.log('value', value);
    console.log('valid', this.addCourse);
    if (this.addCourse.valid) {
      this.courseService.addCourse(this.addCourse.value).subscribe( res => {

      });
    }
  }

}
