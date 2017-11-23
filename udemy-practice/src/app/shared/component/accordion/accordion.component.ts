import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnDestroy
} from '@angular/core';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(AccordionItemComponent) accordions: QueryList<AccordionItemComponent>;
  private subscriptions = [];

  private _accordions: any = [];

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit() {

    this._accordions = this.accordions;
    this.removeSubscriptions();
    this.addSubscriptions();

    this.accordions.changes.subscribe(rex => {
      this._accordions = rex;
      this.removeSubscriptions();
      this.addSubscriptions();
    });
  }

  addSubscriptions() {
    this._accordions.forEach((a, index ) => {
      if (index === 0) {
        let subscription = a.toggleAccordion.subscribe(e => {
          this.toogleAccordion(a);
        });
        this.subscriptions.push(subscription);
      } else {
        let subscription = a.toggleAccordion.subscribe(e => {
          this.toogleAccordion(a);
        });
        this.subscriptions.push(subscription);
      }
    });
  }

  removeSubscriptions() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  toogleAccordion(accordion) {
    if (!accordion.active) {
      // this.accordions.forEach(a => a.active = false);
    }
    // set active accordion
   accordion.active = !accordion.active;
  }

  ngOnDestroy() {
    this.removeSubscriptions();
  }
}
