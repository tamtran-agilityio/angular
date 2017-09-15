import { Component }   from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './heroes.service';

@Component({
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css']
})

export class HeroListComponent {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = this.heroService.getHeroes();
  }

}
