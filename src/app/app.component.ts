import {Component, OnInit,} from '@angular/core';
import {HttpClient} from '@angular/common/http';

    export  interface InTodo {
        completed: boolean
        title: string
        id?: number
    }

@Component({
  selector: 'app-sky',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    perMasTodo: InTodo[] = []

    newPerTodoTitle = ''

  constructor(private httpCl: HttpClient) {  }

  ngOnInit() {
      this.httpCl.get<InTodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .subscribe( perMasTodo => {
          console.log('responz eto', perMasTodo);
          this.perMasTodo = perMasTodo
      })
  }

    addTodo() {

    }
}
