import {Component} from '@angular/core';
import {NS} from './ servises/n.s';
import {LocSService} from './ servises/loc-s.service';


@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LocSService]
})

export class AppComponent {
  constructor(
      private perPS: NS,
      private lokSServ: LocSService
  ) {
  }
}
