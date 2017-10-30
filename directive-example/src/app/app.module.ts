import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BuildComponent } from './build/build.component';
import { SharedModule } from './shared/shared.module';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { AccordionContentComponent } from './accordion-panel/accordion-content/accordion-content.component';
import { ListItemComponent } from './accordion-panel/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildComponent,
    AccordionPanelComponent,
    AccordionContentComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
