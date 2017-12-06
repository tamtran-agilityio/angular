import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import * as _ from 'lodash';
import * as moment from 'moment';

import { Chapter } from '@app/courses/model/chapter';

@Component({
  selector: 'accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit {

  @Input() chapter: Chapter;
  @Input() active: boolean;
  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();
  countTime: String = '';
  countLectured: Number = 0;

  constructor() {}

  ngOnInit() {
    this.countTime = this.getTimePart(this.chapter);
  }

  /**
   * Count time by chapter
   * @param chapter
   */
  getTimePart(chapter: Chapter) {
    if (!_.isEmpty(chapter)) {
      let time = 0;
      this.countLectured = chapter.sections.length;
      _.each(chapter.sections, (section: any) => {
        if (!_.isNil(section.time)) {
          time += moment(section.time, 'HH:mm:ss').diff(moment().startOf('day'), 'seconds');
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
