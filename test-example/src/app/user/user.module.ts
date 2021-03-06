import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { UserRouting } from './user-routing';

@NgModule({
  imports: [
    CommonModule,
    UserRouting
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
