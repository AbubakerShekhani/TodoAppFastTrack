import { Injectable } from '@angular/core';
import { TODOS } from './mock-todo';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor() { 

  }

  getTodos(): Todo[] {
    return TODOS;
  }

 }

