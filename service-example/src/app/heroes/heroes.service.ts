import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { Logger } from '../core/logger.service';

@Injectable()

export class HeroService {
    constructor(private logger: Logger, private isAuthorized: boolean) {
    }

    getHeroes() {
        let auth = this.isAuthorized ? 'authorized' : 'unauthorized';
        this.logger.log(`Authoriez user`, auth);
        return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
    }
}
