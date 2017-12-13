import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { LogDecorator } from '@app/core/decorators/log.decorator';
import { ComponentDecorator } from '@app/core/decorators/component.decorator';

@LogDecorator('about')

@ComponentDecorator({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

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
