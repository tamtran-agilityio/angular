import {
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import * as _ from 'lodash';

import { CategoryService } from '@app/categories/service/category.service';
import { CourseService } from '@app/courses/service/course.service';
import { Category } from '@app/categories/modal/category';
import { Topic } from '@app/categories/modal/topic';
import { ValidationService } from '@app/core/service/validation.service';
import { HelperService } from '@app/core/service/helper.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit {
  categories: Category[];
  topics: Topic[];
  categorySelected: number;
  topicSelected: number;
  typeSelected: string;
  languageSelected: string;
  currentDay: string;
  imageSrc: String = '';

  addCourse: FormGroup;
  constructor(private categoryService: CategoryService,
              private courseService: CourseService,
              private helperService: HelperService,
              private cdr: ChangeDetectorRef,
              private formBuilder: FormBuilder,
              private validationService: ValidationService,
              private router: Router) {
                this.currentDay = this.helperService.setCurrentDay();
              }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
      this.topics = this.categories[0].topics;
      this.categorySelected = this.categories[0].id;
      this.topicSelected = this.categories[0].topics[0].id;
      this.typeSelected = 'new';
      this.languageSelected = 'English';
      this.cdr.markForCheck();
    });

    this.addCourse = this.formBuilder.group({
      'category': ['', Validators.required],
      'topic': ['', Validators.required],
      'title': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'subtitle': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      'images': null,
      'learning': [''],
      'decsription': [''],
      'type': ['', Validators.required],
      'requirements': ['', Validators.required],
      'rating': ['', Validators.compose([Validators.required, this.validationService.ratingValidator(5)])],
      'price': ['', Validators.compose([ Validators.required, this.validationService.priceValidator])],
      'discount': ['', Validators.compose([ Validators.required, this.validationService.priceValidator])],
      'date': ['', Validators.required],
      'language': ['', Validators.required],
    });
    this.addCourse.controls.date.setValue({
      date: this.currentDay
    });
  }

  onChange(event) {
    let images = event.srcElement.files[0];
    this.addCourse.value.images = images.name;
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
    this.addCourse.value.language = language;
  }

  selectType(event) {
    let type = +event.target.value;
    this.addCourse.value.type = type;
  }

  selectImages(event) {
    this.addCourse.patchValue({
      images: event.name
    });
  }

  submitForm(value: any) {
    let user = this.helperService.getLocalStorage('user');
    let courseCloned = _.cloneDeep(this.addCourse.value);
    if (this.addCourse.valid) {
      let course = _.extend(courseCloned, {
        categoryId: _.parseInt(courseCloned.category),
        topicId: _.parseInt(courseCloned.topic),
        teacherId: user.id,
        images: '/assets/img/course/' + courseCloned.images,
        discountPrice: courseCloned.discount,
        name: this.helperService.formatTitle(this.addCourse.value.title)
      });

      _.omit(course, ['category', 'topic']);
      this.courseService.addCourse(course).subscribe( res => {
        if (!_.isNil(res)) {
          this.addCourse.reset();
          this.router.navigate(['/courses/manager']);
        }
      });
    }
  }

}
