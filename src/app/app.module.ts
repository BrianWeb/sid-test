import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlumbingServicesComponent } from './plumbing-services/plumbing-services.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PlumbingServicesDublinComponent } from './services/plumbing-services-dublin/plumbing-services-dublin.component';
import { BoilerInstallationComponent } from './services/boiler-installation/boiler-installation.component';
import { LeakDetectionComponent } from './services/leak-detection/leak-detection.component';
import { HeatingServicesComponent } from './services/heating-services/heating-services.component';
import { ServicesFooterComponent } from './services/common/services-footer/services-footer.component';
import { ServicesMainComponent } from './services/common/services-main/services-main.component';
import { ServicesSidebarComponent } from './services/common/services-sidebar/services-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlumbingServicesComponent,
    HomeComponent,
    ServicesComponent,
    PlumbingServicesDublinComponent,
    BoilerInstallationComponent,
    LeakDetectionComponent,
    HeatingServicesComponent,
    ServicesFooterComponent,
    ServicesMainComponent,
    ServicesSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
