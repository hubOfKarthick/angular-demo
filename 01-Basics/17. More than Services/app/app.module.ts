import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudenListComponent } from './studen-list/studen-list.component';
import { StudenDetailsComponent } from './studen-details/studen-details.component';
import {StudenServiceService} from'./studen-service.service';
import { EmployeeService } from "./employee.service";
@NgModule({
  declarations: [
    AppComponent,
    StudenListComponent,
    StudenDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  //include studentservice in the provider array
  providers: [StudenServiceService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
