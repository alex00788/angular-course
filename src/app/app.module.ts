import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './src/form/form.component';
import { SpisComponent } from './src/spis/spis.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SpisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
