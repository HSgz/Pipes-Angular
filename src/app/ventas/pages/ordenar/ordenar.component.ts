import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [`
    h1 {
      margin-top: 10px; 
    }
  `],
})
export class OrdenarComponent {
  args: boolean = true;
  heoreArgs = ''

  heroes:Heroe[] = [
    {
      nombre: 'Superman',
      capa: true,
      categoria: 'Dc Comic',
      superPoder: 'Rayos Laser',
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      capa: true,
      categoria: 'Dc Comic',
      superPoder: 'Cash',
      color: Color.negro
    },
    {
      nombre: 'Doctor Strange',
      capa: true,
      categoria: 'Marvel',
      superPoder: 'Magia',
      color: Color.anaranjado
    },
    {
      nombre: 'Hulk',
      capa: false,
      categoria: 'Marvel',
      superPoder: 'Fuerza',
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      capa: false,
      categoria: 'Dc Comic',
      superPoder: 'Ecolocalización',
      color: Color.rojo
    }
  ]

  toggle() {
    this.args = !this.args;
  }

  ordenar(value: string){
    this.heoreArgs = value;
  }
}
