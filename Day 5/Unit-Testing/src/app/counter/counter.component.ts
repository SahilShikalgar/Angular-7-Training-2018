import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  value:number = 0;

  constructor() { }
  ngOnInit() {

  }


  incr()
  {
    this.value++;
  }
  decr()
  {
    this.value--;
  }
}
