import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //#4
import { AboutComponent } from './about/about.component'; //#5
import { DashboardComponent } from './dashboard/dashboard.component';//#6

const routes: Routes = [
{ path: 'home', 
  component: HomeComponent 
},
{
  path: 'about',
  component: AboutComponent
},
{ path: 'dashboard',
  component: DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,DashboardComponent]