import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  @Input() selectedItem: Todo;

  constructor() { }

  ngOnInit() {

  }


  

}
