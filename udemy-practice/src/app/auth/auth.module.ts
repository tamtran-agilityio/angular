import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { SettingComponent } from './component/setting/setting.component';

export const COMMON_MODULE: any[] = [
  SharedModule,
  CoreModule
];
export const AUTH_COMPONENT: any[] = [
  LoginComponent,
  RegisterComponent,
  ResetComponent
];
export const AUTH_PROVIDERS: any[] = [
  AuthService,
  UserService
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...AUTH_COMPONENT,
    SettingComponent
  ],
  exports: [
    ...AUTH_COMPONENT
  ],
  providers: [
    ...AUTH_PROVIDERS
  ]
})
export class AuthModule { }
