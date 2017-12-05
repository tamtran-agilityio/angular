import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import * as _ from 'lodash';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'collection-channel',
  templateUrl: './collection-channel.component.html',
  styleUrls: ['./collection-channel.component.scss']
})
export class CollectionChannelComponent implements OnInit {
  @Input() collection;
  // backgroundImage: String = '';
  constructor() {
    if (!_.isEmpty(this.collection)) {
      // this.backgroundImage = this.collection.imageLg;
    }
  }

  ngOnInit() {
    if (!_.isEmpty(this.collection)) {
      // this.backgroundImage = this.collection.imageLg;
    }
  }

}
