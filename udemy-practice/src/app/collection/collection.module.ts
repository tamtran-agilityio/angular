import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './component/collection.component';
import { CollectionService } from './service/collection.service';
import { CollectionChannelComponent } from './component/collection-channel/collection-channel.component';
import { SetbackgroundDirective } from './directive/setbackground.directive';

export const COLLECTION_COMPONENT: any[] = [
  CollectionComponent,
  CollectionChannelComponent,
  SetbackgroundDirective
];

export const COLLECTION_PROVIDERS: any[] = [
  CollectionService
];

@NgModule({
  imports: [
    CommonModule
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
