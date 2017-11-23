import { Component, OnInit, OnChanges } from '@angular/core';

import * as _ from 'lodash';
import { ModalService } from '../../service/modal.service';
import { User } from '../../../auth/model/use';
import { HelperService } from '../../../core/service/helper.service';
import { Dropdown } from '../../modal/dropdown';
import { CategoryService } from '../../../categories/service/category.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  modalTitle: String = 'Login';
  modalId: String = 'Login';
  user: User = null;
  shortName: any = '';
  dropdowns: Dropdown[];
  constructor(private modalService: ModalService,
              private helperService: HelperService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.user = this.helperService.getLocalStorage('user');
    if (!_.isNil(this.user)) {
      this.shortName = this.helperService.getShortName(this.user.fullName);
    }

    this.categoryService.getCategories().subscribe( (res: any[]) => {
      this.dropdowns = res;
    });
  }

  clickLogin() {
    this.modalService.openModal('Login');
  }

  clickRegister() {
    this.modalService.openModal('Register');
  }
}
