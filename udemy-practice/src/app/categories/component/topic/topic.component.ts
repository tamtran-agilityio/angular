import {
  Component,
  OnInit,
  Input,
  OnChanges
} from '@angular/core';

import * as _ from 'lodash';

import { Category } from '../../modal/category';
import { Topic } from '../../modal/topic';

@Component({
  selector: 'list-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit, OnChanges {
  // @Input() category: Category[];
  // topics: Topic[];
  constructor() { }

  ngOnInit() {
      // this.topics = this.getListTopics(this.category);
  }

  ngOnChanges() {
  }

  getListTopics(category) {
    if (!_.isEmpty(category)) {
      return category.topics;
    }
  }

}
