import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'main-group',
  templateUrl: './main-group.component.html',
  styleUrls: ['./main-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainGroupComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
