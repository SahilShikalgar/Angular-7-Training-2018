import { Component, OnInit , Input } from '@angular/core';
import { Task } from '../../../../models/task';
import { TaskService } from '../../../../services/task.service';
import {MessageService} from '../../../../services/message.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() taskItem:Task;

  constructor(private taskService : TaskService,private messageService:MessageService) { }

  ngOnInit() {
  }

  deleteTask()
  {
    this.taskService.removeTask(this.taskItem.id).subscribe((data)=> {
      //pu an alert mechanism
      this.messageService.setMessage("Something Happend");
    });
  }
}
