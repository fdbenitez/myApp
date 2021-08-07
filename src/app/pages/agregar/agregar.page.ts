import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { List } from '../../models/list.model';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from '../../models/list-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  titulo:any;
  lista:List
  nombreItem:string=''
  constructor(public deseosService:DeseosService,private route:ActivatedRoute) {
    
       this.route.params.subscribe((params) => {
       this.titulo=params.titulo
       this.lista=new List(this.titulo)  
     
     
         this.deseosService.agregarLista(this.lista);
       
       
     
 
    });
  
  }
  borrar(idx:number){
    this.lista.items.splice(idx,1)
    this.deseosService.guardarStorage()
  }
  actualizarTarea(item:ListItem){
    item.completados=!item.completados
   
    let pendiente:number=0;
     for (let index = 0; index < this.lista.items.length; index++) {
       if (!this.lista.items[index].completados) {
         pendiente=pendiente+1
       }
     }
     if (pendiente===0) {
       this.lista.terminada=true
       this.lista.terminadaEn=new Date()
     }
     else{
      this.lista.terminada=false
      this.lista.terminadaEn=null
     }
     this.deseosService.guardarStorage()
  }
  agregarItem(){
    if(this.nombreItem.length===0 ){
      return ; 
    }
    const nuevoItem= new ListItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem='';
    this.deseosService.guardarStorage()
    //localStorage.setItem('data',JSON.stringify(this.lista))
   
  }

  ngOnInit() {
  }

}


