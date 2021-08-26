import {Component} from '@angular/core';

export interface IntSpis {
  surname: string
  name: string
}
@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  massiv: IntSpis [] = [
    {surname: 'Фоничев', name: 'Александр'},
    {surname: 'Popov', name: 'Александр'}
  ]

  metisform(perAddm: IntSpis) {
    this.massiv.unshift(perAddm)
  }

  delite(surname: string) {
    this.massiv = this.massiv.filter(perfor => perfor.surname !== surname )
  }
}
