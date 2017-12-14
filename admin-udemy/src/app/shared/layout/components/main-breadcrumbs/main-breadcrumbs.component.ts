import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'main-breadcrumbs',
  templateUrl: './main-breadcrumbs.component.html',
  styleUrls: ['./main-breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBreadcrumbsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
