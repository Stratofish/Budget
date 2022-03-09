import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageComponent as CalendarPageComponent} from "./Calendar/page/page.component";

const routes: Routes = [
  {
    path: '',
    component: CalendarPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
