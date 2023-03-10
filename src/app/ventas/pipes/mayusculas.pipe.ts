import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class Mayusculas implements PipeTransform {
  transform(value: string, args: boolean = true): string {
    return (args) ? value.toUpperCase() : value.toLowerCase();
  }
}
