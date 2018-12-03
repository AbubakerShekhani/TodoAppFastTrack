import { Injectable } from '@angular/core';
import { TODOS } from './mock-todo';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos:Todo[];

  constructor() { 
    this.todos = TODOS; 
  }

  getTodos(): Todo[] {    
    return this.todos;
  }

  addTodos(todo:Todo) {
    let newTodo: Todo;

    todo.itemname = todo.itemname.trim();

    newTodo = {id:this.getLastID()+1, itemname: todo.itemname };

    if (!todo.itemname) { return; }

    this.todos.push(newTodo);
  }

  deleteTodos(todo:Todo) {
    this.todos = this.todos.filter(h => h !== todo);
  }

  getLastID():number {
    let lastID:number;
    let length = this.todos.length;

    lastID = this.todos[length-1].id;
    return lastID;
  }
 }

