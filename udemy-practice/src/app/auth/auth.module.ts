import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { SharedModule } from '../shared/shared.module';

export const AUTH_COMPONENT: any[] = [
  LoginComponent,
  RegisterComponent,
  ResetComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...AUTH_COMPONENT
  ],
  exports: [
    ...AUTH_COMPONENT
  ]
})
export class AuthModule { }
