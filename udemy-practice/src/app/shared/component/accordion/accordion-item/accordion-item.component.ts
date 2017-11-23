import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  @Input() title: string;
  @Input() active: boolean;
  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  onClick(event) {
    event.preventDefault();
    this.toggleAccordion.emit(this.active);
  }
}
