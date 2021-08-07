import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarListaPage } from './mostrar-lista.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarListaPageRoutingModule {}
