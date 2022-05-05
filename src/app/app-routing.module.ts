import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubjectsComponent} from './subjects/subjects.component';

const routes: Routes = [{
  path: '',
  component: SubjectsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
