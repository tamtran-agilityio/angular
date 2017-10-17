import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { ProductService } from './product.service';
import { ProductRoutingModule } from './product.routing';

export const PRODUCT_COMPONENTS: any[] = [
    ProductComponent,
    ProductDetailsComponent
];

export const PRODUCT_PROVIDERS: any[] = [
    ProductService
];

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers: [
    ...PRODUCT_PROVIDERS
  ],
  declarations: [
    ...PRODUCT_COMPONENTS
  ],
  exports: [
    PRODUCT_COMPONENTS
  ]
})
export class ProductModule {}
