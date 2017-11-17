import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule, } from '@angular/http';

import { CategoryComponent } from './category/category.component';
import { TopicComponent } from './topic/topic.component';
import { CategoryService } from './service/category.service';
import { FormatLinkPipe } from './pipes/format-link.pipe';
import { DropdownComponent } from './dropdown.component';

export const COMMON_CORE: any[] = [
  RouterModule,
  CommonModule
]
export const DROPDOWN_COMPONENT: any[] = [
  CategoryComponent,
  TopicComponent,
  FormatLinkPipe,
  DropdownComponent
];

export const DROPDOWN_PROVIDERS: any[] = [
  CategoryService
];

@NgModule({
  imports: [
    ...COMMON_CORE
  ],
  declarations: [
    ...DROPDOWN_COMPONENT
  ],
  exports: [
    ...DROPDOWN_COMPONENT
  ],
  providers: [
    ...DROPDOWN_PROVIDERS
  ]
})
export class DropdownModule { }
