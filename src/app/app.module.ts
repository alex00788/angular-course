import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {StyleDir} from './Style.dir';
import { NDirDirective } from './n-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    StyleDir,
    NDirDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
