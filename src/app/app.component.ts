import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay} from 'rxjs/operators';
import {InTodo, ToDoService} from './toDo.service';



@Component({
    selector: 'app-sky',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    perMasTodo: InTodo[] = [];

    loading = false;

    newPerTodoTitle = '';

    constructor(private todoServ: ToDoService) {  }

    ngOnInit() {
        this.fetchTodo();
    }

    addTodo() {
        if (!this.newPerTodoTitle.trim()) {
            return;
        }

        this.todoServ.addTodo({
            title: this.newPerTodoTitle,
            completed: false
        })
            .subscribe(todo => {
            console.log('todo eto', todo);
            this.perMasTodo.push(todo);
            this.newPerTodoTitle = '';
        });
    }

    fetchTodo() {
        this.loading = true;
            this.todoServ.fetchTodo()
            .subscribe( perMasTodo => {
                console.log('response eto', perMasTodo);
                this.perMasTodo = perMasTodo;
        this.loading = false;
            })
    }

    removeTodo(id: number) {
        this.todoServ.removeTodo(id)
           .subscribe(response => {
              this.perMasTodo = this.perMasTodo.filter(t => t.id !== id);
           });
    }

    completedTodo(id: number) {
        this.todoServ.completedTodo(id).subscribe(todomy => {
            this.perMasTodo.find(t => t.id === todomy.id).completed = true;
        });
    }
}
