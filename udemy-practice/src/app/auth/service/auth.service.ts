import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate
} from '@angular/router';

import { AppConfigService } from '@app/core';
import { HelperService } from '@app/core/service/helper.service';
import { debug } from 'util';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router,
              private helperService: HelperService) { }

  canActivate() {
    if (this.helperService.getLocalStorage('user')) {
        // logged in so return true
        debugger;
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/']);
    debugger;
    return false;
  }
}
