import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.page.html',
  styleUrls: ['./terminados.page.scss'],
})
export class TerminadosPage implements OnInit {

  constructor(public deseosService: DeseosService) { }
    listaSeleccionada(lista:List){
    console.log(lista)
 }
  ngOnInit() {
  }

}
