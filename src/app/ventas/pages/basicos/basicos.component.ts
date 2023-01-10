import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
    `
      div, p {
        margin-top: 1.2em;
      }

      ul {
        padding-left: 20px; 
      }
    `
  ]
})
export class BasicosComponent {

    nombreLower = 'henry';
    nombreUpper = 'HENRY';
    nombreCompleto = 'hEnRy'
    fecha: Date = new Date();

}
