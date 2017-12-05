import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

import { Chapter } from '../../../../courses/modal/chapter';
import { Part } from '../../../../courses/modal/part';
import { concat } from 'rxjs/observable/concat';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  @Input() chapter: Chapter;
  @Input() active: boolean;
  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();
  parts: Part[];
  countTime: String = '';
  countLectured: Number = 0;
  constructor() {}

  ngOnInit() {
    this.countTime = this.getTimePart(this.chapter);
  }

  getTimePart(chapter: Chapter) {
    // let time = '';
    if (!_.isEmpty(chapter)) {
      let time = 0;
      this.countLectured = chapter.parts.length;
      _.each(chapter.parts, (part: Part) => {
        if (!_.isNil(part.time)) {
          time += moment(part.time, 'HH:mm:ss').diff(moment().startOf('day'), 'seconds');
        }
      });
      return moment.utc((time) * 1000).format('HH:mm:ss');
    }
  }

  onClick(event) {
    event.preventDefault();
    this.toggleAccordion.emit(this.active);
  }
}
