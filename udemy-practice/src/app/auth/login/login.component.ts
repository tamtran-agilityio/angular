import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalService } from '../../shared';
import { UserService } from '../service/user.service';
import { ValidationService } from '../../core';

@Component({
  selector: 'login-box',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {
  loginTitle: String = 'Login in to Your Udemy Account!';
  modalId: String = 'Login';
  footerTitle: String= `Don't have an account? Sign up`;
  loginForm: FormGroup;
  constructor(private modalService: ModalService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private validationService: ValidationService) {
              }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required, ValidationService.emailValidator],
      'password': ['', Validators.required, ValidationService.passwordValidator]
    });
    console.log(this.loginForm);
  }

  ngOnChanges() {
    // this.userService.getUserBy('trantamtk08b@gmail.com', 'test').subscribe(res => {
    //   console.log('res', res);
    // });
  }

  loginUser() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      console.log('Test');
    }
  }

}
