import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ NgbTimepickerConfig ]
})
export class TimepickerComponent implements OnInit {

  time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(config: NgbTimepickerConfig) {
    config.seconds = true;
    config.spinners = false;
  }

  ngOnInit() {
  }

}
