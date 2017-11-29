import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import * as _ from 'lodash';
import { ModalService } from '../../service/modal.service';
import { User } from '../../../auth/model/use';
import { HelperService } from '../../../core/service/helper.service';
import { Dropdown } from '../../modal/dropdown';
import { CategoryService } from '../../../categories/service/category.service';
import { CourseService } from '@app/courses/service/course.service';



@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() termSearch: EventEmitter<string> = new EventEmitter<string>();
  myCourses: any[];
  modalTitle: String = 'Login';
  modalId: String = 'Login';
  user: User = null;
  shortName: any = '';
  dropdowns: Dropdown[];
  searchForm: FormGroup;
  searchField = new FormControl();

  constructor(private modalService: ModalService,
              private helperService: HelperService,
              private categoryService: CategoryService,
              private courseService: CourseService,
              private cdr: ChangeDetectorRef,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.helperService.getLocalStorage('user');
    if (!_.isNil(this.user)) {
      this.shortName = this.helperService.getShortName(this.user.fullName);
    }

    this.categoryService.getCategories().subscribe( (res: any[]) => {
      this.dropdowns = res;
    });

    if (!_.isNil(this.user)) {
      this.courseService.getCoursesByUser(this.user).subscribe((res) => {
        this.courseService.getCourseByUser(res.user_courses).subscribe( (myCoures: any) => {
          this.myCourses = myCoures;
          this.cdr.markForCheck();
        });
      });
    }

    this.searchForm = this.formBuilder.group({
      search: this.searchField
    });
  }

  clickLogin() {
    this.modalService.openModal('Login');
  }

  clickRegister() {
    this.modalService.openModal('Register');
  }

  logOut(event) {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  onChange(event) {
    if (event.which === 13) {
      let value = this.searchForm.controls.search.value;
      if (_.isEmpty(value)) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/courses/search/'], { queryParams: { q: value }});
      }
    }
  }
}
