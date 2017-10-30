import { Component, OnInit } from '@angular/core';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';

@Component({
  selector: 'app-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss']
})
export class AccordionPanelComponent implements OnInit {
  name: string;
  tabs = [
    { name: 'Tab 1', desc: 1 },
    { name: 'Tab 2', desc: 2 },
    { name: 'Tab 3', desc: 3 }
  ];
  constructor() { }

  ngOnInit() {
  }
}
