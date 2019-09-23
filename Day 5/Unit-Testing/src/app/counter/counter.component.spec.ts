import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should initiate with 0',() =>{
    expect(component.value).toBe(0);
  })

  it('It should increment properly',()=>{
    component.incr();
    component.incr();
    component.incr();
    component.incr();
    expect(component.value).toBe(4);
  })

  it('It should decrement properly',()=>{
    component.decr();
    component.decr();
    component.decr();
    component.decr();
    expect(component.value).toBe(-4);
  })
});
