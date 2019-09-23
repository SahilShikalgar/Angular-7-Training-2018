import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent implements OnInit {

  title:string='Data Binding Demo';

  constructor() { }

  ngOnInit() {
  }

  changeTitle(input)
  {
    this.title=input.value;
  }
}
