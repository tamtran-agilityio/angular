import { Inject } from '@angular/core';

export class User {
    name: string;
    constructor(@Inject('userName') name: string) {
        this.name = name;
    }
}
