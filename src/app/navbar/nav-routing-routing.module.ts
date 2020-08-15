import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '../about/about.component';
import {ExperienceComponent} from '../experience/experience.component';
import {EducationComponent} from '../education/education.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-component', pathMatch: 'full' },
  { path: 'about-component', component: AboutComponent },
  { path: 'experience-component', component: ExperienceComponent , data: {animation : 'IsRight'}},
  { path: 'education-component', component: EducationComponent , data: {animation : 'IsLeft'}}
];


@NgModule({
  imports: [RouterModule.forChild(routes),
            RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NavRoutingRoutingModule { }
