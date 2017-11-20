import { Component, OnInit, Input } from '@angular/core';

import { Collection } from './modal/collection';
@Component({
  selector: 'achieve-goals',
  templateUrl: './achieve-goals.component.html',
  styleUrls: ['./achieve-goals.component.scss']
})
export class AchieveGoalsComponent implements OnInit {
  @Input() collections: Collection[];
  constructor() { }

  ngOnInit() {

  }

}
