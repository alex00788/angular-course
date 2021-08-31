import {Component} from '@angular/core';
import {NS} from './ servises/n.s';


@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private perPS: NS) {
  }
}
