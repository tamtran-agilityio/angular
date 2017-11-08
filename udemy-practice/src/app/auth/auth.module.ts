import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';

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
    SharedModule,
    CoreModule
  ],
  declarations: [
    ...AUTH_COMPONENT
  ],
  exports: [
    ...AUTH_COMPONENT
  ],
  providers: [
    ...AUTH_PROVIDERS
  ]
})
export class AuthModule { }
