import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as _ from 'lodash';

import { CollectionService } from '../service/collection.service';
import { Collection } from '../modal/collection';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  collection: Collection;
  constructor(private route: ActivatedRoute,
              private collectionService: CollectionService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.collectionService.getCollectionByName(params.name).subscribe((res: any) => {
        console.log('params', res);
        this.collection = _.first(res);

      });
    });
  }

}
