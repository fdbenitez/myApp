import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable()
export class DeseosService {
    listas: List[]=[]
    constructor(){
        console.log('Servicio listo para ejecutar')  
        this.cargaStorage();
    }
    agregarLista(lista:List){
        this.listas.push(lista)
        this.guardarStorage()
    }
    guardarStorage(){
        localStorage.setItem('data',JSON.stringify(this.listas));
    }
    cargaStorage(){
        if(localStorage.getItem('data')){
            this.listas=JSON.parse(localStorage.getItem('data'));
        }
    }
}