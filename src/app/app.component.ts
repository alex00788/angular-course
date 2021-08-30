import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {

  e: number = Math.E
  per = 'hellow bro'
  date: Date = new Date()
  per2 = 0.42
}
