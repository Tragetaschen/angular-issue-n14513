import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlarmService } from './alarm.service';
import { InstrumentAlarmService } from './instrument-alarm.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: AlarmService, useClass: InstrumentAlarmService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
