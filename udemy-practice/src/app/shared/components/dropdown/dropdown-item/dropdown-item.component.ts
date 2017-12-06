import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import * as _ from 'lodash';

import { Dropdown } from '@app/shared/model/dropdown';

@Component({
  selector: 'dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.scss']
})
export class DropdownItemComponent implements OnInit {
  @Input() dropdowns: Dropdown;
  constructor() { }

  ngOnInit() {
  }
}
