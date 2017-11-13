import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { CategoryComponent } from './category/category.component';
import { TopicComponent } from './topic/topic.component';
import { CategoryService } from './service/category.service';
import { TopicService } from './service/topic.service';

export const COMMON_MODULE: any[] = [
  SharedModule,
  CoreModule
]

export const CATEGORIES_COMPONENT: any[] = [
  CategoryComponent,
  TopicComponent
]

export const CATEGORIES_PROVIDERS: any[] = [
  CategoryService
]

@NgModule({
  imports: [
    ...COMMON_MODULE
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
export class CategoriesModule { }
