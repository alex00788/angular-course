import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {Ds} from './directivs/d.s';
import { NdDirective } from './directivs/nd.directive';

@NgModule({
  declarations: [
    AppComponent,
    Ds,
    NdDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
