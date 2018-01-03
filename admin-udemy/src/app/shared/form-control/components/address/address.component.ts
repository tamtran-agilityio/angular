import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  Validators,
  ControlContainer
} from '@angular/forms';

@Component({
  selector: 'address',
  templateUrl: './address.component.html',
  styleUrls: [ './address.component.scss' ]
})
export class AddressComponent implements OnInit {
  constructor(
    public controlContainer: ControlContainer
  ) {
    console.log('controlContainer', controlContainer);
  }
  ngOnInit() {
  }
}
