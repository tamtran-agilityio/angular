import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as _ from 'lodash';
import { CourseService } from '@app/courses/service/course.service';
import { Course } from '@app/courses/modal/course';
import { Category } from '@app/categories/modal/category';
import { Topic } from '@app/categories/modal/topic';
import { CategoryService } from '@app/categories/service/category.service';
import { HelperService } from '@app/core/service/helper.service';
import { ValidationService } from '@app/core/service/validation.service';

@Component({
  selector: 'edit-courses',
  templateUrl: './edit-courses.component.html',
  styleUrls: ['./edit-courses.component.scss']
})
export class EditCoursesComponent implements OnInit {
  course: Course;
  categories: Category[];
  topics: Topic[];
  categorySelected: number;
  topicSelected: number;
  typeSelected: string;
  languageSelected: string;
  currentDay: string;
  formCourse: FormGroup;
  constructor(private helperService: HelperService,
              private courseService: CourseService,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private cdr: ChangeDetectorRef,
              private formBuilder: FormBuilder,
              private validationService: ValidationService) {
                this.currentDay = this.helperService.setCurrentDay();
              }
  ngOnInit() {
    this.formCourse = this.formBuilder.group({
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

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      this.topics = this.categories[0].topics;
      this.categorySelected = this.categories[0].id;
      this.topicSelected = this.categories[0].topics[0].id;
    });

    this.route.params.subscribe(params => {
      this.courseService.getCourseByName(params.name).subscribe((res) => {
        let cloned = _.cloneDeep(this.course);
        cloned = _.first(res);
        this.course = cloned;
        this.formCourse.setValue({
          'category': this.course.categoryId,
          'topic': this.course.topicId,
          'title': this.course.title,
          'subtitle': this.course.subtitle,
          'images': this.course.images,
          'learning': this.course.learning,
          'decsription': this.course.decsription,
          'type': this.course.type,
          'requirements': this.course.requirements,
          'rating': this.course.rating.toString(),
          'price': this.course.price.toString(),
          'discount': this.course.discountPrice,
          'date': this.course.date,
          'language': this.course.language,
        });
        this.currentDay = this.course.date;
        this.categorySelected = this.course.categoryId;
        this.cdr.markForCheck();
        this.categorySelected = this.categories[this.course.categoryId].id;
        this.topics = this.categories[this.course.categoryId].topics;
        this.categorySelected = this.categories[this.course.categoryId].id;
        this.topicSelected = this.categories[this.course.categoryId].topics[this.course.topicId].id;
        debugger;
      });
    });


  }

  onChange(event) {
    let images = event.srcElement.files[0];
    this.formCourse.value.images = images.name;
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
    this.formCourse.value.language = language;
  }

  selectType(event) {
    let type = +event.target.value;
    this.formCourse.value.type = type;
  }

  selectImages(event) {
    this.formCourse.patchValue({
      images: event.name
    });
  }

  // submitForm(value: any) {
  //   let user = this.helperService.getLocalStorage('user');
  //   let courseCloned = _.cloneDeep(this.formCourse.value);
  //   if (this.formCourse.valid) {
  //     let course = _.extend(courseCloned, {
  //       categoryId: courseCloned.category,
  //       topicId: courseCloned.topic,
  //       teacherId: user.id,
  //       images: '/assets/img/course/' + courseCloned.images,
  //       discountPrice: courseCloned.discount,
  //       name: this.helperService.formatTitle(this.formCourse.value.title)
  //     });

  //     _.omit(course, ['category', 'topic']);
  //     // this.courseService.formCourse(course).subscribe( res => {
  //     //   if (!_.isNil(res)) {
  //     //     this.formCourse.reset();
  //     //   }
  //     // });
  //   }
  // }

}
