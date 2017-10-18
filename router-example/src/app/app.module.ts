import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    ProductModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
