import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
    `
      div, p {
        margin-top: 1.2em;
      }
    `
  ]
})
export class NumerosComponent {
  ventasNetas: number = 2567789.6658;
  porcentaje: number = 0.48;
}
