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

export const COMMON_MODULE: any[] = [
  SharedModule
];

export const USER_COMPONENT: any[] = [
  UserComponent
];

@NgModule({
  imports: [
    COMMON_MODULE
  ],
  declarations: [
    ...USER_COMPONENT
  ],
  exports: [
    ...USER_COMPONENT
  ]
})
export class UserModule { }
