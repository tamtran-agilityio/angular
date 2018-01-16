import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Date } from '@ngb-example/bootstrap/src/models/date';

@Component({
  selector: 'datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatepickerComponent implements OnInit {
  model: NgbDateStruct;
  date: Date;
  displayMonths = 2;
  navigation = 'select';
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;

  constructor() {
    this.model = this.selectToday();
  }

  ngOnInit() {}

  selectToday() {
    let now = new Date();
    return {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };
  }
}
