import { Component, OnInit , Input } from '@angular/core';
import { Task } from '../../../../models/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() taskItem:Task[];

  constructor() { }

  ngOnInit() {
  }

}
