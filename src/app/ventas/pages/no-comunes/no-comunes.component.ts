import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
    `
      div,
      p {
        margin-top: 1.2em;
      }

      ul {
        padding-left: 10px;
      }
    `,
  ],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Henry';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'un cliente esperando',
    other: '# clientes esperando',
  };

  CambiarGenero() {
    (this.nombre = 'Jesica'), (this.genero = 'femenino');
  }

  borrarCliente() {
    this.clientes.pop();
  }

  persona = {
    nombre: 'Henry',
    edad: 26,
    dirección: 'Santiago, Chile',
  };

  heroes = [
    {
      nombre: 'Aquaman',
      elemento: 'agua',
    },
    {
      nombre: 'superman',
      elemento: 'aire',
    },
    {
      nombre: 'batman',
      elemento: 'dinero',
    },
  ];

  // Async Pipe
  miObservable = interval(1000);

    

  // Promesa
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Mostrando data de la promesa');
    }, 1000);
  });
}
