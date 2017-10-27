import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
@Directive({
  selector: '[appCustomHighligh]'
})
export class CustomDirective {

  constructor(private hightLight: HighlightDirective) {
      hightLight.highlight('red');
  }

  @HostListener('click') onKeyDown() {
    this.hightLight.highlight('cyan');
  }
}
