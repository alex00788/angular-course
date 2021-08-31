import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MBPipe} from './pipes/m-b.pipe';
import { FilterrrPipe } from './pipes/filterrr.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MBPipe,
    FilterrrPipe,
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
