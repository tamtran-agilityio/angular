import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Dropdown } from '../../modal/dropdown';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() dropdowns: Dropdown[];
  constructor() { }

  ngOnInit() {
  }
}
