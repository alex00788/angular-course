import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Interface} from '../app.component';

@Component({
  selector: 'app-spis',
  templateUrl: './spis.component.html',
  styleUrls: ['./spis.component.scss']
})
export class SpisComponent implements OnInit, OnDestroy {

  @Input() nuwPer: Interface
  @Output() perRemOut = new EventEmitter<number>()

  constructor() { }

  ngOnInit() {
  }

  rem() {
    this.perRemOut.emit(this.nuwPer.id)
  }
  ngOnDestroy(): void {
  }
}
