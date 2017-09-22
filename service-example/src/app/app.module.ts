import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { User } from './user/user';
import { APP_CONFIG, HERO_DI_CONFIG } from './core/app.config';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { HeroService } from './heroes/heroes.service';
import { PostService } from './post/post.service';
import { PostListComponent } from './post/post-list.component';
import { Logger } from './core/logger.service';
import { ProviderComponent } from './component/provider.component';
import { LoginComponent } from './auth/login.component';

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroListComponent,
        ProviderComponent,
        LoginComponent,
        PostListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        Logger,
        HeroService,
        PostService,
        UserService,
        { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
        User,
        { provide: 'userName', useValue: 'Tom' },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
