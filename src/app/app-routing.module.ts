import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppointmentComponent } from './appointment/appointment.component';



const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'appointment', component: AppointmentComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }