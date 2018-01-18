import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopoverComponent implements OnInit {
  name: string = 'Popover';
  constructor() { }

  ngOnInit() {
  }

}
