import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactUsComponent
      }
    ])
  ]
})
export class ContactUsModule { }
