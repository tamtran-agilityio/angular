import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Dropdown } from '@app/shared/model/dropdown';

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
