import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AlertModule} from 'ngx-bootstrap/alert';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { NavRoutingModule } from './navbar/nav-routing.module';
import {NavRoutingRoutingModule} from './navbar/nav-routing-routing.module';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    EducationComponent,
    ExperienceComponent
  ],
    imports: [
      BrowserModule,
      AlertModule.forRoot(),
      NavRoutingModule,
      NavRoutingRoutingModule,
      BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
