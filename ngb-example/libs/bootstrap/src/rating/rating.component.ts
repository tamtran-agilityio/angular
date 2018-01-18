import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent implements OnInit {

  ctrl = new FormControl(null, Validators.required);
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

}
