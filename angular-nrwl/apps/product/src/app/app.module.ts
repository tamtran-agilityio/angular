import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([{ path: 'product', component: ProductItemComponent }], { initialNavigation: 'enabled' })
  ],
  declarations: [AppComponent, ProductItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
