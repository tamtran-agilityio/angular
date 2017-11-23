import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { CarouselComponent } from './component/carousel/carousel.component';
import { CarouselItemDirective } from './directive/carousel-item.directive';
import { CarouselPreDirective } from './directive/carousel-pre.directive';
import { CarouselNextDirective } from './directive/carousel-next.directive';
import { CarouselItemComponent } from './component/carousel-item/carousel-item.component';
import { CarouselTitleComponent } from './component/carousel-title/carousel-title.component';

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.4, threshold: 20 }, // override default settings
    'pan': { velocity: 0.4, threshold: 20 }
  };
}
export const COMPONENT_CAROUSEL: any[] = [
  CarouselComponent,
  CarouselItemComponent,
  CarouselTitleComponent,
  CarouselItemDirective,
  CarouselPreDirective,
  CarouselNextDirective
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...COMPONENT_CAROUSEL
  ],
  exports: [
    ...COMPONENT_CAROUSEL
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }
  ],
})
export class CarouselModule { }
