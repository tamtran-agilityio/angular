import { Component, OnInit } from '@angular/core';
import { Collapse } from '../animations';

@Component({
  selector: 'app-list-item',
  animations: [Collapse(300)],
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
