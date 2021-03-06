import { Component, OnInit } from '@angular/core';
//import { Todo } from 'src/app/todo';
//import { TODOS } from '../mock-todo';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { FormControl, FormBuilder, Validators, FormGroup  } from '@angular/forms';

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

  profileForm = this.fb.group({ 
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
   });

  //dependency injection
  constructor(private todoService: TodoService, private fb: FormBuilder) { 
    
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
    this.todoService.deleteTodos(todo);
    this.getTodos();
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodos(todo);
    this.getTodos();
  }
  
  onChange(event) {
    console.log('event ',event);
  }

  ngOnChanges() {
    //this.getTodos();
  }

  onSubmit(value) {
    console.log(value);
  }
}
