import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CustomDirectiveDirective } from './custom-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
