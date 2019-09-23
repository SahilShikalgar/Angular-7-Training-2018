import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(typeof args === 'undefined')
    {
      return value;
    }

    const filteredArray = value.filter((e1)=>{
        return e1.title.indexOf(args)>=0;
    });

    return filteredArray;
  }

}
