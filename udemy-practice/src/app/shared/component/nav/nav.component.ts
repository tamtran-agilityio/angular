import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';

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
export class NavComponent implements OnInit, OnChanges {

  // @Input() myCoures: any[];
  myCourses: any[];
  modalTitle: String = 'Login';
  modalId: String = 'Login';
  user: User = null;
  shortName: any = '';
  dropdowns: Dropdown[];
  constructor(private modalService: ModalService,
              private helperService: HelperService,
              private categoryService: CategoryService,
              private courseService: CourseService,
              private cdr: ChangeDetectorRef,
              private router: Router) { }

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
  }

  ngOnChanges() {
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
}
