import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';

export  interface InTodo {
    completed: boolean;
    title: string;
    id?: number;
}

@Injectable({providedIn: 'root'})

export class ToDoService {
    constructor(private httpCl: HttpClient) {
    }

    addTodo(todo: InTodo): Observable<InTodo> {
      return   this.httpCl.post<InTodo>('https://jsonplaceholder.typicode.com/todos', todo)
       }

    fetchTodo(): Observable<InTodo[]> {
        return this.httpCl.get<InTodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
            .pipe(delay(500));
    }
    remuveTodo(id: number): Observable <void> {
        return  this.httpCl.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
}
