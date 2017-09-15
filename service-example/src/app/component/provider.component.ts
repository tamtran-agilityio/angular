import { Component, Inject, Injectable, OnInit } from '@angular/core';

import { APP_CONFIG, AppConfig,
         HERO_DI_CONFIG }       from '../core/app.config';

import { HeroService }          from '../heroes/heroes.service';
import { heroServiceProvider }  from '../heroes/hero.service.provider';
import { Logger }               from '../core/logger.service';
import { UserService }    from '../user/user.service';

let template = '{{log}}';

class BetterLogger extends Logger {}

@Component({
  selector: 'provider-better',
  template: template,
  providers:
    [{ provide: Logger, useClass: BetterLogger }]
})

export class ProviderComponent {
    log: string;
    constructor(logger: Logger) {
        logger.log(' Hello from logger provided with BetterLogger','BetterLogger');
        this.log = logger.logs[0];
    }
}
