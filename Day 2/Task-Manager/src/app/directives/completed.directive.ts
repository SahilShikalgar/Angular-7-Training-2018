import { Directive,ElementRef, Input , OnInit } from '@angular/core';

@Directive({
  selector: '[appCompleted]'
})
export class CompletedDirective implements OnInit{

@Input() completed;

  constructor(private el : ElementRef) {
  }

  ngOnInit()
  {
    if(this.completed)
      this.el.nativeElement.style.textDecoration="line-through";
  }
}