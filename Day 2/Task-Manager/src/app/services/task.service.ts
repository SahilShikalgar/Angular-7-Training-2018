import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl:string="http://localhost:3000/tasks";

  constructor(private http : HttpClient) { }

  getTasks():Observable<Task[]>
  { 
    //caling api server
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(taskTitle:string):Observable<Task>
  {
    //const newId = this.tasks.length === 0 ? 1 : this.tasks[this.tasks.length-1].id+1; 
    //this.tasks.push(new Task(newId,taskTitle));

    const newTask = {
      title:taskTitle,
      completed:false,
      date: new Date()
    }
    return this.http.post<Task>(this.apiUrl,newTask);
  }

  removeTask(id:number):Observable<any>
  {
    /*this.tasks.forEach((task,index) => {
      if(id === task.id)
      {
        this.tasks.splice(index,1);
      }
    });*/
    return this.http.delete(this.apiUrl+'/'+id);
  }

  getSingleTask(id:number) : Observable<Task>
  {
    return this.http.get<Task>(this.apiUrl+'/'+id);
  }
}