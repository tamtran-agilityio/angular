import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { LogDecorator } from '@app/core/decorators/log.decorator';

@LogDecorator('about')
@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
