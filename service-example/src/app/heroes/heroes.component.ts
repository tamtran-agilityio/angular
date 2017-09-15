import { Component } from '@angular/core';
import { heroServiceProvider } from './hero.service.provider';

@Component({
    selector: 'heroes-item',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: [ heroServiceProvider ]
})

export class HeroesComponent {
}
