import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  Params,
  PRIMARY_OUTLET
} from '@angular/router';

import {
  Breadcrumb
} from '@app/shared/layout/models/breadcrumb';

@Component({
  selector: 'main-breadcrumbs',
  templateUrl: './main-breadcrumbs.component.html',
  styleUrls: ['./main-breadcrumbs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainBreadcrumbsComponent implements OnInit {
  breadcrumbs: Breadcrumb[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {

    // Subscribe to the NavigationEnd event
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
    // Set breadcrumbs
    const root: ActivatedRoute = this.activatedRoute.root;
    });
  }

}
