import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StudenListComponent } from './studen-list/studen-list.component';
import { StudenDetailsComponent } from './studen-details/studen-details.component';
import {StudenServiceService} from'./studen-service.service';
import { HttpClientModule } from '@angular/common/http';
// import {HttpModule} from '@angular/http'; In angular 2

@NgModule({
  declarations: [
    AppComponent,
    StudenListComponent,
    StudenDetailsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  //include studentservice in the provider array
  providers: [StudenServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
