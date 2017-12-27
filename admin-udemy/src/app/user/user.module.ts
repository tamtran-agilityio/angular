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
import {
  UserHelperService
} from '@app/user/services/user-helper.service';

export const COMMON_MODULES: any[] = [
  SharedModule
];

export const USER_COMPONENTS: any[] = [
  UserComponent,
  ListUserComponent,
  AddUserComponent
];

export const USER_PROVIDERS: any[] = [
  UserService,
  UserHelperService,
  UserValidationService
];

export const ENTRY_COMPONENTS: any[] = [
  AddUserComponent
];

@NgModule({
  imports: [
    COMMON_MODULES
  ],
  declarations: [
    ...USER_COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  exports: [
    ...USER_COMPONENTS
  ],
  providers: [
    ...USER_PROVIDERS
  ]
})
export class UserModule { }
