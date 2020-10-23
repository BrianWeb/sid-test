import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlumbingServicesComponent } from './plumbing-services/plumbing-services.component';
import { BoilerInstallationComponent } from './services/boiler-installation/boiler-installation.component';
import { HeatingServicesComponent } from './services/heating-services/heating-services.component';
import { LeakDetectionComponent } from './services/leak-detection/leak-detection.component';
import { PlumbingServicesDublinComponent } from './services/plumbing-services-dublin/plumbing-services-dublin.component';


const routes: Routes = [
  { path: 'plumbing-services', component: PlumbingServicesComponent },
  { path: 'services/boiler-installation', component: BoilerInstallationComponent },
  { path: 'services/leak-detection', component: LeakDetectionComponent  },
  { path: 'services/plumbing-services-dublin', component: PlumbingServicesDublinComponent  },
  { path: 'services/heating-services', component: HeatingServicesComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
