import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbTooltipConfig]
})
export class TooltipComponent implements OnInit {
  constructor(
    config: NgbTooltipConfig
  ) {
    config.placement = 'top';
    config.triggers = 'click';
  }

  ngOnInit() {
  }

}
