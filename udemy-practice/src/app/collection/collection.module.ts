import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './component/collection.component';
import { CollectionService } from './service/collection.service';
import { CollectionChannelComponent } from './component/collection-channel/collection-channel.component';
import { SharedModule } from '@app/shared/shared.module';
import { CoursesModule } from '@app/courses/courses.module';

export const COLLECTION_COMPONENT: any[] = [
  CollectionComponent,
  CollectionChannelComponent
];

export const COLLECTION_PROVIDERS: any[] = [
  CollectionService
];

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CoursesModule
  ],
  declarations: [
    ...COLLECTION_COMPONENT
  ],
  exports: [
    ...COLLECTION_COMPONENT
  ],
  providers: [
    ...COLLECTION_PROVIDERS
  ]
})
export class CollectionModule { }
