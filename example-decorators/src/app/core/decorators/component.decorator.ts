import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import * as _ from 'lodash';

export function ComponentDecorator(metadata: any) {
  return function(target: any) {
    const annotations = Reflect.getMetadata('annotations', target) || [];
    annotations.push(new Component(DecoratorUtils.getMetadata(metadata)));
    Reflect.defineMetadata('annotations', annotations, target);
    return target;
  };
}

export class DecoratorUtils {
  public static getMetadata(metadata: any) {
    metadata.encapsulation = ViewEncapsulation.None;
    return metadata;
  }

  public static annotateComponent(target: any, metadata) {
    const annotations = Reflect.getMetadata('annotations', target) || [];
    annotations.push(new Component(DecoratorUtils.getMetadata(metadata)));
    Reflect.defineMetadata('annotations', annotations, target);
    return target;
  }
}
