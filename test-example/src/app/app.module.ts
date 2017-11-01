import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerInlineComponent } from './banner-inline/banner-inline.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    BannerInlineComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
