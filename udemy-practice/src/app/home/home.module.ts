import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home-routing.module';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { StreamerSidebarComponent } from './streamer-sidebar/streamer-sidebar.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { CoursesModule } from '../courses/courses.module';
import { AchieveGoalsComponent } from './achieve-goals/achieve-goals.component';

export const COMMON_MODULE: any[] = [
  AuthModule,
  SharedModule,
  CoursesModule
];

export const HOME_COMPONENT: any[] = [
  HomeComponent,
  StreamerSidebarComponent,
  HowWorksComponent,
  AchieveGoalsComponent
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...HOME_COMPONENT
  ]
})
export class HomeModule { }
