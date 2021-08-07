export class ListItem {
    desc : string;
    completados:boolean
    constructor(desc:string) {
        this.desc=desc;
        this.completados=false;
    }
}