import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    console.log(args)
    if (value.length > args) {
      return value.substring(0, args) + '...';
    }
    return value;
  }

}
