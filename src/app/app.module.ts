import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayComponent } from './Calendar/day/day.component';
import { MonthComponent } from './Calendar/month/month.component';
import { PageComponent } from './Calendar/page/page.component';
import { DateLabelComponent } from './Calendar/day/date-label/date-label.component';
import { DateEntriesComponent } from './Calendar/day/date-entries/date-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    MonthComponent,
    PageComponent,
    DateLabelComponent,
    DateEntriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
