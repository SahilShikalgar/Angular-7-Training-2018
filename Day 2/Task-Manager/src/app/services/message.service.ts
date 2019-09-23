import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  subject = new Subject();

  constructor() { }

  getMessage()
  {
    return this.subject.asObservable(); // as observable
  }

  setMessage(msg : String)
  {
    //console.log('hi');
    this.subject.next(msg);
  }
}
