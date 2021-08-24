import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { SpisComponent } from './spis/spis.component';
import { BlankComponent } from './blank/blank.component';
import { DirektivDirective } from './direktiv.directive';


@NgModule({
  declarations: [
    AppComponent,
    SpisComponent,
    BlankComponent,
    DirektivDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
