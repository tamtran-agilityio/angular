import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth.service';

const AUTHOR_SERVICE = [
  AuthService
];

const AUTHOR_COMPONENT = [
  LoginComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...AUTHOR_COMPONENT
  ],
  providers: [
    ...AUTHOR_SERVICE
  ]
})
export class AuthModule { }
