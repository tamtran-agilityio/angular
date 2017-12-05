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
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit, OnChanges {
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  getListTopics(category) {
    if (!_.isEmpty(category)) {
      return category.topics;
    }
  }

}
