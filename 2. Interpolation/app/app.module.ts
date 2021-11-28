import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InterpolationSampleComponent } from './interpolation-sample/interpolation-sample.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
