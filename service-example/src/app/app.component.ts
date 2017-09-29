import { Component, Inject } from '@angular/core';

import { UserService } from './user/user.service';
import { APP_CONFIG, AppConfig } from './core/app.config';
import { Logger } from './core/logger.service';
import { DatePipe } from '@angular/common';
import { DateFormatPipe } from './pipe/date-format.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Logger]
})
export class AppComponent {
    title: string;
    names: string;
    currentDate : any;
    customDate: any;

    constructor(@Inject(APP_CONFIG) config: AppConfig,
                private userService: UserService) {
                this.title = config.title;
                this.names = config.names;
                this.currentDate = new Date();

                let dateFormatPipeFilter = new DateFormatPipe();
                this.customDate = dateFormatPipeFilter.transform(this.currentDate);
    }

    get isAuthorized() {
        return this.user.isAuthorized;
    }

    nextUser() {
        this.userService.getNewUser();
    }

    get user() {
        return this.userService.user;
    }

    get userInfo() {
        return `Current user, ${this.user.name}, is ` +
           `${this.isAuthorized ? '' : 'not'} authorized. `;
    }
}
