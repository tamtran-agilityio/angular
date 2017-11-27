import {
  Directive,
  Input,
  Renderer,
  ElementRef,
  AfterViewInit
} from '@angular/core';

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
