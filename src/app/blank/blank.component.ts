import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Interface} from '../app.component';

@Component({
    selector: 'app-blank',
    templateUrl: './blank.component.html',
    styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {

    @ViewChild('fam') per: ElementRef;
    @Output() perOutputa: EventEmitter<Interface> = new EventEmitter<Interface>();

    surname = '';
    name = '';
    otchestvo = '';

    constructor() {
    }

    ngOnInit() {
    }

    addvSps() {
        if (this.name.trim() && this.surname.trim() && this.otchestvo.trim()) {
            const perDladd: Interface = {
                name: this.name,
                surname: this.surname,
                otchestvo: this.otchestvo
            };
            this.perOutputa.emit(perDladd);
            this.name = this.surname = this.otchestvo = '';
        }
    }

    focus() {
        this.per.nativeElement.focus();
    }
}
