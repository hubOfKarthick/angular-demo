import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormdemobasicsComponent } from './formdemobasics/formdemobasics.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FormdemobasicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
