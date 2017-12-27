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
import {
  AppConfigService
} from '@app/core/services/app-config.service';

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
    private userValidationService: UserValidationService,
    private appConfig: AppConfigService
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
      name: user.name,
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
      let user: User = {
        id: null,
        name: this.userForm.value.name,
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
      name: ['', Validators.compose([Validators.required, Validators.minLength(this.appConfig.PATTERN_MATCHINGS.MIN_LENGTH)])],
      email: ['', Validators.compose([Validators.required, this.userValidationService.emailValidator.bind(this.userValidationService)])],
      password: ['', Validators.compose([Validators.required, this.userValidationService.passwordValidator.bind(this.userValidationService)])]
    });
  }

}
