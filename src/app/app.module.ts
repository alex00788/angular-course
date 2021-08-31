import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {NS} from './ servises/n.s';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NS],
  bootstrap: [AppComponent]
})
export class AppModule { }
