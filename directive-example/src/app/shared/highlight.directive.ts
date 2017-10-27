import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') appHighlight: string;
  @HostBinding('class.big-text') private ishovering: boolean;

  constructor(private elment: ElementRef) {
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red' || this.appHighlight);
    this.ishovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.ishovering = false;
  }

  public highlight(color: string) {
    this.elment.nativeElement.style.backgroundColor = color;
  }

}
