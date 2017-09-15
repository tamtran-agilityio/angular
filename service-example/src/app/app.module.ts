import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { APP_CONFIG, HERO_DI_CONFIG } from './core/app.config';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { HeroService } from './heroes/heroes.service';
import { Logger } from './core/logger.service';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroListComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [
        Logger,
        HeroService,
        UserService,
        { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
