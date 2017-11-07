import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, RegisterComponent, ResetComponent]
})
export class AuthModule { }
