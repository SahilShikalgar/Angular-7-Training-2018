import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { MessageService } from '../../../services/message.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  TaskTitle:string = '';
  formSubmitted:boolean = false;

  constructor(private taskservice:TaskService,private messageService:MessageService) {
      
   }

  ngOnInit() {

  }

  addTask(e)
  {
    e.preventDefault();
    this.formSubmitted=true;
    if(this.TaskTitle.trim()!='')
    {
       this.taskservice.addTask(this.TaskTitle).subscribe((data)=> {
            this.messageService.setMessage("Something Happend");
           // console.log('set msg done')
       });
       this.TaskTitle='';
       this.formSubmitted=false;
    }
  }
}
