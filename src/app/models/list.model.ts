import { ListItem } from './list-item.model';
export class List {
    items:ListItem[];
    id:number;
    titulo:string;
    creadaEn:Date;
    terminadaEn:Date;
    terminada:boolean;
    constructor(titulo:string) {
        this.titulo=titulo;
        this.terminada=false;
        this.creadaEn=new Date();
        this.items=[];
        this.id= new Date().getTime();
    }
}