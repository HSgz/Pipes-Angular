import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    title:'Pipe Basicos',
    component: BasicosComponent,
    pathMatch: 'full',
  },
  {
    path: 'numeros',
    title: 'Pipe Numeros',
    component: NumerosComponent,
  },
  {
    path: 'no-comunes',
    title: 'Pipes no Comunes',
    component: NoComunesComponent,
  },
  {
    path: 'ordenar',
    title: 'Pipes Personalizados',
    component: OrdenarComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {}
