import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatExpansionModule,
  MatGridListModule
} from '@angular/material';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutComponent } from './pages';
import {
  CardComponent,
  DividerComponent,
  ExpansionPanelComponent,
  GirdListComponent
 } from './components';

@NgModule({
  declarations: [
    LayoutComponent,
    CardComponent,
    DividerComponent,
    ExpansionPanelComponent,
    GirdListComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatGridListModule
  ]
})
export class LayoutsModule { }
