import {Component} from '@angular/core';

@Component({
    selector: 'app-nuw',
    templateUrl: 'nuw.html',
    styleUrls: ['nuw.scss']
})
export class NuwComponent {
per = 'любой текст или заголовок, или число, или сумма чисел, или массив...... '

    img = 'https://pbs.twimg.com/media/C2KFY4tWQAIyrRa.jpg'

    constructor() {
    setTimeout(() => {
        this.img = 'https://im0-tub-ru.yandex.net/i?id=7259898a768a5b11df3530d396b6373c-l&ref=rim&n=13&w=1080&h=1080'
    }, 3000)
    }
}
