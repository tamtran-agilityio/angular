import { Component } from '@angular/core';
import { User } from '../user/user';

@Component({
    selector: 'login',
    template: ` Current user: {{currentUser.name}}`
})

export class LoginComponent {
    constructor(public currentUser: User) {

    }
}
