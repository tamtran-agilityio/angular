import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as _ from 'lodash';

import { AppConfigService } from '@app/core/services/app-config.service';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appConfig: AppConfigService
  ) {
    this.searchForm = fb.group( {search: ''});
  }

  ngOnInit() {
  }

  searchCourses(event) {
    let value = this.searchForm.controls.search.value;
    if (event.which === this.appConfig.KEY_CODE) {
      if (_.isEmpty(value)) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/courses/search/'], { queryParams: { q: value }});
      }
    }
  }

}
