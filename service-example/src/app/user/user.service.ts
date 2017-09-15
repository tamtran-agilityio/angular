import { Injectable } from '@angular/core';

export class User {
    constructor(
        public name: string,
        public isAuthorized = false) { }
}

let test = new User('Alice', false);

@Injectable()
export class UserService {
    user = test;

    getNewUser() {
        return this.user;
    }

    getUserName() {
        return this.user.name;
    }
}
