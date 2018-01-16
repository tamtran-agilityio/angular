import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollapseComponent implements OnInit {
  public isCollapsed = false;
  constructor() {}

  ngOnInit() {}
}
