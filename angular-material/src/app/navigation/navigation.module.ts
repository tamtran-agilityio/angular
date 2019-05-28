import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { MenuComponent } from './components';
import { NavigationComponent } from './pages';
import { NavigationRoutingModule } from './navigation-routing.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    MenuComponent,
    NavigationComponent,
    SidenavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class NavigationModule { }
