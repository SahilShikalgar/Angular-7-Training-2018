import { Component, OnInit } from '@angular/core';
import { Task  } from '../../models/task'

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  tasks:Task[] = [];    //blank array

  constructor() { }

  ngOnInit() {
    this.tasks.push(new Task(1,'Learn Angular'),new Task(2,'Learn Bootstrap'),new Task(3,'Learn JavaScript'),new Task(4,'Learn React'));
  }

}
