import { Component, OnInit } from '@angular/core';
import {NS} from '../ servises/n.s';
import {LocSService} from '../ servises/loc-s.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
  providers: [LocSService]
})
export class CounterComponent {

  constructor(
      private perPS: NS,
      private lokSServ: LocSService
  ) {}
}
