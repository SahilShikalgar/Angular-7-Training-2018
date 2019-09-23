import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model :any = [];

  constructor(private router:Router) { }

  ngOnInit() {
    localStorage.removeItem('user');
  }

  login()
  {
    //send data to the server 
    if(this.model.username==='admin' && this.model.password==='admin')
    {
        // redirect user to the task manager
        localStorage.setItem('user',this.model.username);
        this.router.navigate(['/tasks']);
    }
  }
}
