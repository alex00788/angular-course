import {Component,} from '@angular/core';

@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {
appPer = 'off'

  metIzm() {
    console.log(this.appPer);
  }
}
