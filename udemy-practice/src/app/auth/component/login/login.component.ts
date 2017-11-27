import {
  Component,
  OnInit,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import * as _ from 'lodash';

import { ModalService } from '@app/shared/service/modal.service';
import { UserService } from '@app/auth/service/user.service';
import { ValidationService } from '@app/core/service/validation.service';
import { HelperService } from '@app/core/service/helper.service';
import { AppConfigService } from '@app/core/service/app-config.service';
import { User } from '@app/auth/model/use';

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
              private appConfig: AppConfigService,
              private cdr: ChangeDetectorRef,
              private zone: NgZone) {
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
          this.helperService.setLocalStorage('user', JSON.stringify(user));
          this.modalService.closeModal('Login');
          this.zone.runOutsideAngular(() => {
            location.reload();
          });
        } else {
          this.errorMessagge = this.appConfig.VALIDATION.AUTHENTICATION.AUTHENTICATION_FAIL;
        }
      });
    }
  }

}
