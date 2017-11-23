import { Transfrom } from './transfrom';
import { Point } from './point';

import { AnimationSequenceMetadata } from '@angular/core';
export type Custom = 'banner';
export type Animate = 'lazy';

export interface Carousel {
  grid: Transfrom;
  slide?: number;
  speed?: number;
  interval?: number;
  animation?: Animate;
  point?: Point;
  type?: string;
  load?: number;
  custom?: Custom;
  loop?: boolean;
  touch?: boolean;
  easing?: string;
}
