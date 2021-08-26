import {Component, Input, OnInit} from '@angular/core';
import {IntSpis } from '../../app.component';


@Component({
    selector: 'app-spis',
    templateUrl: './spis.component.html',
    styleUrls: ['./spis.component.scss']
})
export class SpisComponent implements OnInit{

    @Input() perSpis: IntSpis

    constructor() {
    }

    ngOnInit() {
}

}
