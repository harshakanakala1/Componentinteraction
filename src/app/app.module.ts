import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustompropertybindingComponent } from './custompropertybinding/custompropertybinding.component';
import { CustomeventbindingComponent } from './customeventbinding/customeventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    CustompropertybindingComponent,
    CustomeventbindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
