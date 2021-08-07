import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      
      {
        path: 'pendientes',
        loadChildren: () => import('../pages/pendientes/pendientes.module').then( m => m.PendientesPageModule)
      },
      {
        path: 'terminados',
        loadChildren: () => import('../pages/terminados/terminados.module').then( m => m.TerminadosPageModule)
      },
      {
        path: 'agregar',
        loadChildren: () => import('../pages/agregar/agregar.module').then( m => m.AgregarPageModule)
      },
      {
        path: 'mostrar-lista/:id',
        loadChildren: () => import('../pages/mostrar-lista/mostrar-lista.module').then( m => m.MostrarListaPageModule)
      },
      {
        path: '',
        redirectTo: '/home/pendientes',
        pathMatch: 'full'
      },
      {
        path: '**', redirectTo:('/home/pendientes'),pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/pendientes',
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo:('/home/pendientes'),pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
