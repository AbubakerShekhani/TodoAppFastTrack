import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() selectedItem: Todo;
  @Output() change: EventEmitter<number> = new EventEmitter();

  counter = 0;

  constructor() { }

  ngOnInit() {

  }  


  increment() {
    this.counter++;
    this.change.emit(this.counter);
  }

  decrement() {
    this.counter--;
    this.change.emit(this.counter);
  }

}
