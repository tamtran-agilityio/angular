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

import * as _ from 'lodash';

import { ModalService } from '../../shared';
import { UserService } from '../service/user.service';
import { ValidationService, HelperService } from '../../core';
import { User } from '../model/use';

@Component({
  selector: 'login-box',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginTitle: String = 'Login in to Your Udemy Account!';
  modalId: String = 'Login';
  footerTitle: String= `Don't have an account? Sign up`;
  loginForm: FormGroup;
  errorMessagge: string = null;
  constructor(private modalService: ModalService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private validationService: ValidationService,
              private helperService: HelperService,
              private cdr: ChangeDetectorRef) {
              }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.compose([Validators.required, this.validationService.emailValidator])],
      'password': ['', Validators.compose([Validators.required, this.validationService.passwordValidator])]
    });
  }

  loginUser() {

    if (this.loginForm.dirty && this.loginForm.valid) {
      this.errorMessagge = null;
      this.userService.getUserBy(this.loginForm.value.email, this.loginForm.value.password).subscribe(res => {
        if (!_.isEmpty(res)) {
          let user: User =  _.head(res);
          console.log('user', user);
          this.helperService.setLocalStorage('user', user);
          this.modalService.closeModal('Login');
        } else {
          this.errorMessagge = 'Test';
        }
      });
    }
  }

}
