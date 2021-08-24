import {Component} from '@angular/core';
export interface Interface {
  surname: string
  name: string
  otchestvo: string
  id?: number
}

@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
massiv: Interface [] = [
  {surname:'Фоничев', name:'Александр', otchestvo:'Николаевич', id: 1}
]

  metpriema(perDladd: Interface) {
    this.massiv.unshift(perDladd)
  }

  remT(id: number) {
    this.massiv = this.massiv.filter(c => c.id !== id)
  }
}
