import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';

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
  UserDialogService
} from '@app/user/services/user-dialog.service';
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
  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddUserComponent>,
    private userService: UserService,
    private userValidationService: UserValidationService
  ) {
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fullName: ['', Validators.compose([Validators.required, Validators.min(5)])],
      email: ['', Validators.compose([Validators.required, this.userValidationService.emailValidator])],
      password: ['', Validators.compose([Validators.required, this.userValidationService.passwordValidator])],
      confirmPassword: ['', Validators.compose([Validators.required, this.userValidationService.confirmPasswordValidator])]
    });
  }

  saveUser(event) {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value);
    }
  }

}
