import { Component, OnInit } from '@angular/core';
import { Task } from '../../../models/task';
import { TaskService} from '../../../services/task.service';
import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

 
  taskList : Task[] = [];

  constructor(private taskService:TaskService,private messageService:MessageService) {

   }

  ngOnInit() {
      this.getTasks();
      this.messageService.getMessage().subscribe((data)=>{
        this.getTasks();
      });
  }

  getTasks()
  {
    this.taskService.getTasks().subscribe((data) => {
      this.taskList = data; 
  });
  }
}
