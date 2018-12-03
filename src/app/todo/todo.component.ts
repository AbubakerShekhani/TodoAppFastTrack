import { Component, OnInit } from '@angular/core';
//import { Todo } from 'src/app/todo';
//import { TODOS } from '../mock-todo';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[];

  todo: Todo;

  //todos = Todo[];

  selectedTodo: Todo;

  //dependency injection
  constructor(private todoService:TodoService) { 
    
  }

  getTodos():void {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit() {
    this.todo = { itemname: "",
                  id:0};
    this.getTodos();
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  delete(todo: Todo): void {
    this.todos = this.todos.filter(h => h !== todo);
  }

  addTodo(todo: Todo): void {
    let newTodo: Todo;

    todo.itemname = todo.itemname.trim();

    newTodo = {id:this.getLastID()+1, itemname: todo.itemname };

    if (!todo.itemname) { return; }
    
    this.todos.push(newTodo);

    
  }

  getLastID():number {
    let lastID:number;
    let length = this.todos.length;
    
    lastID = this.todos[length-1].id;
    return lastID;
  }
  
  onChange(event) {
    console.log('event ',event)
  }
}
