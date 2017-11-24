import {
  Directive,
  Input,
  Renderer,
  ElementRef
} from '@angular/core';
import {  } from '@angular/core/src/metadata/directives';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appSetbackground]'
})
export class SetbackgroundDirective implements AfterViewInit {
  @Input('appSetbackground') appSetbackground: string;
  constructor(private el: ElementRef, private rendere: Renderer) {

  }

  ngAfterViewInit() {
    this.rendere.setElementStyle(this.el.nativeElement, 'backgroundImage', 'url(' + this.appSetbackground + ')');
  }
}
