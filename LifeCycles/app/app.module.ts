import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ParentComponent } from './parent/parent.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ContentChildComponent, ParentComponent, ViewChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
