import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarListaPageRoutingModule } from './mostrar-lista-routing.module';

import { MostrarListaPage } from './mostrar-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarListaPageRoutingModule
  ],
  declarations: [MostrarListaPage]
})
export class MostrarListaPageModule {}
