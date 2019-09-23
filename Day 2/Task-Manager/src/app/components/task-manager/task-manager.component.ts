import { Component, OnInit } from '@angular/core';
import { Task  } from '../../models/task'
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {

    if(localStorage.getItem('user')==null)
    {
      this.router.navigate(['/login']);
    }
  }
  
}
