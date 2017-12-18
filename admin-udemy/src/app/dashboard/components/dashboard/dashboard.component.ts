import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  LoggerDecorator
} from '@app/core/decorators/logger.decorator';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@LoggerDecorator()

export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
