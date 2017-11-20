import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home-routing.module';
import { AuthModule } from '../auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { StreamerSidebarComponent } from './streamer-sidebar/streamer-sidebar.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { CoursesModule } from '../courses/courses.module';
import { AchieveGoalsComponent } from './achieve-goals/achieve-goals.component';
import { AchieveGoalsService } from './achieve-goals/service/achieve-goals.service';
import { FeaturedTopicComponent } from './featured-topic/featured-topic.component';
import { InstructorBusinessComponent } from './instructor-business/instructor-business.component';

export const COMMON_MODULE: any[] = [
  AuthModule,
  SharedModule,
  CoursesModule
];

export const HOME_COMPONENT: any[] = [
  HomeComponent,
  StreamerSidebarComponent,
  HowWorksComponent,
  AchieveGoalsComponent,
  FeaturedTopicComponent,
  InstructorBusinessComponent
];

export const HOME_PROVIDERS: any[] = [
  AchieveGoalsService
];

@NgModule({
  imports: [
    ...COMMON_MODULE
  ],
  declarations: [
    ...HOME_COMPONENT
  ],
  providers: [
    ...HOME_PROVIDERS
  ]
})
export class HomeModule { }
