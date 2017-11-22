import { Component, OnInit, OnChanges } from '@angular/core';

import * as _ from 'lodash';
import { ModalService } from '../modal/modal.service';
import { User } from '../../auth/model/use';
import { HelperService } from '../../core/service/helper.service';

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
  constructor(private modalService: ModalService,
              private helperService: HelperService) { }

  ngOnInit() {
    this.user = this.helperService.getLocalStorage('user');
    if (!_.isNil(this.user)) {
      this.shortName = this.helperService.getShortName(this.user.fullName);
    }
  }

  clickLogin() {
    this.modalService.openModal('Login');
  }

  clickRegister() {
    this.modalService.openModal('Register');
  }
}
