import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

import * as _ from 'lodash';

import {
  MatDialogRef
} from '@angular/material';
import {
  AutoUnsubscribe
} from '@app/core/decorators/autounsubscribe.decorator';
import {
  User
} from '@app/user/models/user';
import {
  UserService
} from '@app/user/services/user.service';
import {
  UserValidationService
} from '@app/user/services/user-validation.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@AutoUnsubscribe()
export class AddUserComponent implements OnInit {
  private userForm: FormGroup;
  public user: User;
  @Output() userInfo: EventEmitter<User> = new EventEmitter<User>();
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddUserComponent>,
    private userService: UserService,
    private userValidationService: UserValidationService
  ) { }

  ngOnInit() {
    this.getValidator();
    if (this.user) {
      this.getValueUser(this.user);
    }
  }

  /**
   * Handle set value user
   * @param user set value user to form
   */
  getValueUser(user: User) {
    this.userForm.setValue({
      fullName: user.fullName,
      email: user.email,
      password: user.password
    });
  }

  /**
   * Handle save and edit user
   * @param event click button save
   */
  saveUser(event) {
    if (this.userForm.valid) {
      const user: User = {
        id: null,
        fullName: this.userForm.value.fullName,
        email: this.userForm.value.email,
        password: this.userForm.value.password
      };

      this.userInfo.emit(user);
      this.userForm.reset();
      this.dialogRef.close();
    }
  }

  /**
   * Handle get validator
   */
  getValidator() {
    this.userForm = this.formBuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email: ['', Validators.compose([Validators.required, this.userValidationService.emailValidator])],
      password: ['', Validators.compose([Validators.required, this.userValidationService.passwordValidator])]
    });
  }

}
