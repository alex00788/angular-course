import {Component, OnInit} from '@angular/core';

export  interface Spis {
  surname: string
  name: string
}
@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {

  strPoisk: ''

  masSpis: Spis [] = [
    {surname: 'Петров', name: 'Иван'},
    {surname: 'Акмеев', name: 'Кирил'},
    {surname: 'Ивлиев', name: 'Вадим'},
  ]

}
