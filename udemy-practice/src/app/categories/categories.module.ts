import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from './service/category.service';
import { CategoryComponent } from './component/category/category.component';
import { TopicComponent } from './component/topic/topic.component';
import { SharedModule } from '../shared/shared.module';

export const CATEGORIES_COMPONENT: any[] = [
  // SharedModule,
  CategoryComponent,
  TopicComponent
];

export const CATEGORIES_PROVIDERS: any[] = [
  CategoryService
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
    ...CATEGORIES_COMPONENT
  ],
  exports: [
    ...CATEGORIES_COMPONENT
  ],
  providers: [
    ...CATEGORIES_PROVIDERS
  ]
})

export class CategoriesModule {}
