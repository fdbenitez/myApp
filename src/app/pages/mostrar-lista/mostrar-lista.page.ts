import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { ListItem } from 'src/app/models/list-item.model';
import { DeseosService } from 'src/app/services/deseos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-lista',
  templateUrl: './mostrar-lista.page.html',
  styleUrls: ['./mostrar-lista.page.scss'],
})
export class MostrarListaPage implements OnInit {
  titulo:any;
  lista:List
  nombreItem:string=''
  id:number
  unaLista=List
 listas:List[]=[]
  constructor(public deseosService:DeseosService,private route:ActivatedRoute) {
    
    const myData=JSON.parse(localStorage.getItem('data'));
    this.route.params.subscribe((params:any) => {
      console.log(params)
      this.id=params['id']
      for (let index = 0; index < myData.length; index++) {
      if (myData[index].id==this.id) {
        this.unaLista=myData[index]
        this.lista=myData;
        console.log(this.unaLista)
      
      }  
      }
 });


 }
 onClick(){
 
 }
 
 agregarItem(){
  const nuevoItem= new ListItem(this.nombreItem);
  if(this.nombreItem.length===0 ){
    return ; 
  }

 this.unaLista['items'].push(nuevoItem);

 localStorage.setItem('data',JSON.stringify(this.lista) )
 this.nombreItem='';
 }
 actualizarTarea(item:ListItem){
  item.completados=!item.completados
  let pendiente:number=0;
  let refreh:boolean=false
  for (let index = 0; index < this.unaLista['items'].length; index++) {
   if(!this.unaLista['items'][index].completados){
    pendiente=pendiente+1;
   }
  }
  console.log(pendiente)
  if(pendiente===0){
    
    this.unaLista['terminada']=true;
    this.unaLista['terminadaEn']=new Date();
 
   }
   else{
    
    this.unaLista['terminada']=false;
    this.unaLista['terminadaEn']=null;
   }


  localStorage.setItem('data',JSON.stringify(this.lista));
  
   
   
}
borrar(idx:number){
  this.unaLista['items'].splice(idx,1)
  localStorage.setItem('data',JSON.stringify(this.lista) )
  
}
refresh(): void {
  window.location.reload();
}


  
  ngOnInit() {
  }

}
