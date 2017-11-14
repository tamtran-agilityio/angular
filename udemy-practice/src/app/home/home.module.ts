import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home-routing.module';
import { AuthModule } from '../auth/auth.module';
import { StreamerSidebarComponent } from './streamer-sidebar/streamer-sidebar.component';

export const COMMON_MODULE: any[] = [
  AuthModule
];

export const HOME_COMPONENT: any[] = [
  HomeComponent,
  StreamerSidebarComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...HOME_COMPONENT,
  ]
})
export class HomeModule { }
