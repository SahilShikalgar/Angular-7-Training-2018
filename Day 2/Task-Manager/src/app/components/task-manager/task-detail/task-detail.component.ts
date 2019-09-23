import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task:Task=null;

  constructor(private route:ActivatedRoute, private taskService : TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      console.log(data);
      this.taskService.getSingleTask(data.id).subscribe((task)=>{
        this.task=task;
      });
    });
  }
}
