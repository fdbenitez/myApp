import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { List } from '../../models/list.model';
import { NavController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.page.html',
  styleUrls: ['./pendientes.page.scss'],
})
export class PendientesPage implements OnInit {
  txto='txt'
  constructor(public deseosService: DeseosService,private Router:Router
    ,private ActivatedRoute:ActivatedRoute,
    private Nav:NavController,private alertController: AlertController
    ) {
    
     }
  listaSeleccioanda(lista:List){
        
        this.Router.navigate(['/home/mostrar-lista',lista.id])
        //this.Nav.navigateForward(['/home/mostrar-lista',{lista:lista}]);
      // this.Nav.navigateForward(['/home/agregar',lista.id]);
      
  }
  borrar(idx:number){
    this.deseosService.listas.splice(idx,1)
    this.deseosService.guardarStorage()
  }
  async agregar(){
    //this.Nav.navigateForward('/home/agregar');
    const alert = await this.alertController.create({
      
      header: 'Nueva Lista',
      message: 'Pon el nombre de la lista',
      inputs: [{ name: 'titulo', type: 'text',placeholder: 'Nueva Lista' }],
      buttons: [{text:'Cancel'},
      {text:'Agregar',
      
      handler:data=>{
        
        if(data['titulo']===''){
         
        }else{
          this.Nav.navigateForward(['/home/agregar',data]); 
        }
        //this.Nav.navigateForward(['/home/agregar',data]); 

               
      }}]
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
