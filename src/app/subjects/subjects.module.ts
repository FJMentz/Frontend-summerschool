import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubjectsComponent} from './subjects.component';
import {LoggerComponent} from '../logger/logger.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SubjectsComponent, LoggerComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SubjectsModule {
}
