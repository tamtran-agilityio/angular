import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as _ from 'lodash';
import { ModalService } from '../../shared';
import { UserService } from '../service/user.service';
import { ValidationService } from '../../core';
import { User } from '../model/use';

@Component({
  selector: 'register-box',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginTitle: String = 'Sign Up and Start Learning!';
  modalId: String = 'Register';
  footerTitle: String= 'Already have an account? Log In';
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private validationService: ValidationService,
              private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'email': ['', Validators.compose([Validators.required, this.validationService.emailValidator])],
      'password': ['', Validators.compose([Validators.required, this.validationService.passwordValidator])]
    });
  }

  regiterUser() {

    if (this.registerForm.dirty && this.registerForm.valid) {
      let user: User = {
        fullName: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      }

      console.log('this.checkEmailAlready(user', user);

      this.userService.getUserByEmail(user).subscribe( (users: User) => {
        if(_.isEmpty(users)) {
          this.userService.addUser(user).subscribe( res => {
            console.log('res', res);
          })
        } else {
          console.log('failed')
        }
      });
    }
  }
}
