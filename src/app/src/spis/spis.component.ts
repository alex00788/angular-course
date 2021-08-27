import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IntSpis} from '../../app.component';


@Component({
    selector: 'app-spis',
    templateUrl: './spis.component.html',
    styleUrls: ['./spis.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class SpisComponent implements OnInit, OnDestroy {

    @Input() perSpis: IntSpis
    @Output() perOutRem = new EventEmitter<any>()

    constructor() {
    }

    ngOnInit() {
}

    remuve() {
        this.perOutRem.emit(this.perSpis.surname)
    }

    ngOnDestroy() {
    }
}
