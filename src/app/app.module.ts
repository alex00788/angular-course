import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {NS} from './ servises/n.s';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NS],
  bootstrap: [AppComponent]
})
export class AppModule { }
