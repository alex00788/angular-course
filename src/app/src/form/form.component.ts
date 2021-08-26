import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IntSpis} from '../../app.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() perOut: EventEmitter<IntSpis> = new EventEmitter<IntSpis>()
  surname = ''
  name = ''

  constructor() { }

  ngOnInit() {
  }

  addVspis() {
    if (this.name.trim() && this.surname.trim()) {
      const perAddm: IntSpis = {
        name: this.name,
        surname: this.surname
      }
      this.perOut.emit(perAddm)
      this.surname = this.name = ''
    }
  }
}
