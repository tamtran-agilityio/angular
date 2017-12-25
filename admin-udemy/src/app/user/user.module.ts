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
  UserValidationService
} from '@app/user/services/user-validation.service';

export const COMMON_MODULE: any[] = [
  SharedModule
];

export const USER_COMPONENT: any[] = [
  UserComponent,
  ListUserComponent,
  AddUserComponent
];

export const USER_PROVIDERS: any[] = [
  UserService,
  UserValidationService
];

export const ENTRY_COMPONENT: any[] = [
  AddUserComponent
];

@NgModule({
  imports: [
    COMMON_MODULE
  ],
  declarations: [
    ...USER_COMPONENT
  ],
  entryComponents: [
    ...ENTRY_COMPONENT
  ],
  exports: [
    ...USER_COMPONENT
  ],
  providers: [
    ...USER_PROVIDERS
  ]
})
export class UserModule { }
