import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component'

export const ROUTES: Routes = [
    {
        path: '',
        component: ProductComponent,
        data: {title: 'Product'}
    },
    {
        path: '',
        children: [
            {
                path: 'product/:id',
                component: ProductDetailsComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule {}
