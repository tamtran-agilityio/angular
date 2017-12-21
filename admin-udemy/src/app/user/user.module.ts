import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  UserComponent
} from './components/user/user.component';
import {
  SharedModule
} from '@app/shared/shared.module';
import {
  ListUserComponent
} from './components/list-user/list-user.component';
import {
  UserService
} from '@app/user/services/user.service';
import {
  AddUserComponent
} from './components/add-user/add-user.component';
import {
  UserDialogService
} from '@app/user/services/user-dialog.service';
import {
  UserValidationService
} from '@app/user/services/user-validation.service';

export const COMMON_MODULE: any[] = [
  SharedModule
];

export const USER_COMPONENT: any[] = [
  UserComponent,
  ListUserComponent
];

export const USER_PROVIDERS: any[] = [
  UserService,
  UserDialogService,
  UserValidationService
];

@NgModule({
  imports: [
    COMMON_MODULE
  ],
  declarations: [
    ...USER_COMPONENT,
    AddUserComponent
  ],
  exports: [
    ...USER_COMPONENT
  ],
  providers: [
    ...USER_PROVIDERS
  ]
})
export class UserModule { }
