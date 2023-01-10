import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(value: Heroe[], args: string): Heroe[] {
    switch (args) {
      case 'nombre':
        return value.sort((a, b) => a.nombre.localeCompare(b.nombre));

      case 'capa':
        return value.sort((a, b) => (a.capa > b.capa ? -1 : 1));

      case 'color':
        return value.sort((a, b) => (a.color > b.color ? 1 : -1));
      default:
        return value;
    }
  }
}
