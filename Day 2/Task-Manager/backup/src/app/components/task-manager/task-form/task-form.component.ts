import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  TaskTitle:string = '';

  constructor() { }

  ngOnInit() {

  }

  addTask(e)
  {
    e.preventDefault();
    console.log(this.TaskTitle);
  }
}
