import { Component, OnInit } from '@angular/core';

export interface Spis {
  surname: string
  name: string

}

@Component({
  selector: 'app-spis',
  templateUrl: './spis.component.html',
  styleUrls: ['./spis.component.scss']
})
export class SpisComponent implements OnInit {

  constructor() { }
massiv: Spis [] = [
  {surname: 'Фоничев', name: 'Александр'},
  {surname: 'Popov', name: 'Александр'}
]
  ngOnInit() {
  }

}
