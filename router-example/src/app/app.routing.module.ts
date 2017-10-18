import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ProductModule } from './product/product.module';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ContactComponent } from './contact/contact.component'
import { ROUTES as homeRouter } from './home/home.routing';
import { ROUTES as aboutRouter } from './about/about.routing';
import { ROUTES as productRouter } from './product/product.routing';
export const COMMON_MODULES: any[] = [
    HomeModule,
    AboutModule,
    ProductModule
]

export const ROUTES: any[] = [
  {
    path: '',
    children: [
        ...homeRouter
    ]
  },
  {
    path: 'about',
    children: [
        ...aboutRouter
    ]
  },
  {
    path: 'product',
    pathMatch: 'full',
    children: [
        ...productRouter
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
    outlet: 'contact'
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, { useHash: false}),
        ...COMMON_MODULES
    ],
    exports: [
        RouterModule,
        ...COMMON_MODULES
    ]
})
export class AppRoutingModule {}
