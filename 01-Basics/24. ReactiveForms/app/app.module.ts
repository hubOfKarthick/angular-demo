import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
