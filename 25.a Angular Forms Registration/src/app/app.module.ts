import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

// library.add(faTimesCircle);

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
