import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss']
})
export class AccordionContentComponent {

  @Input() isOpen: boolean;

  public toggleOpen(event: MouseEvent): any {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}
