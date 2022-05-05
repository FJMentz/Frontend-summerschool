import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SubjectsModule} from './subjects/subjects.module';
import { LoggerComponent } from './logger/logger.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SubjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
