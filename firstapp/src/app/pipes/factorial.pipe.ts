import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let fact = 1;
    for (let i = 1; i <= value; i++) {
      fact = fact * i;
    }
    return fact;
  }

}
