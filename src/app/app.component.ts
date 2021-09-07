import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';

export  interface InTodo {
    completed: boolean;
    title: string;
    id?: number;
}

@Component({
    selector: 'app-sky',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    perMasTodo: InTodo[] = [];

    loading = false;

    newPerTodoTitle = '';

    constructor(private httpCl: HttpClient) {  }

    ngOnInit() {
        this.fetchTodo()
    }

    addTodo() {
        if (!this.newPerTodoTitle.trim()) {
            return;
        }
        const newTodo: InTodo = {
            title: this.newPerTodoTitle,
            completed: false
        };
        this.httpCl.post<InTodo>('https://jsonplaceholder.typicode.com/todos', newTodo)
            .subscribe(todo => {
                console.log('todo eto', todo);
                this.perMasTodo.push(todo);
                this.newPerTodoTitle = '';
            });
    }

    fetchTodo() {
        this.loading = true;
        this.httpCl.get<InTodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .pipe(delay(1500))
            .subscribe( perMasTodo => {
                console.log('responz eto', perMasTodo);
                this.perMasTodo = perMasTodo;
        this.loading = false;
            })
    }

    remuveTodo(id: number) {
       this.httpCl.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`)
           .subscribe(response => {
              this.perMasTodo = this.perMasTodo.filter(t => t.id !== id);
           });
    }
}
