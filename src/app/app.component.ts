import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  per: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve  ('yeeeeeeee')
    }, 3000)
  })
  
  date: Observable<Date> = new Observable(ob => {
    setInterval(() => {
      ob.next(new Date())
    },1000)
  })
}
