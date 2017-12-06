import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl
} from '@angular/forms';
import { Router } from '@angular/router';

import * as _ from 'lodash';

import { CourseService } from '@app/courses/services/course.service';
import { LocalStorageService } from '@app/core/services/local-storage.service';
import { Dropdown } from '@app/shared/model/dropdown';
import { ModalService } from '@app/shared/services/modal.service';

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
  user: any = null;
  shortName: any = '';
  dropdowns: Dropdown[];
  searchForm: FormGroup;
  searchField = new FormControl();

  constructor(
    private modalService: ModalService,
    private courseService: CourseService,
    private localStogerService: LocalStorageService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
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
