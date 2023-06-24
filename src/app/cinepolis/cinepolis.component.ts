import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  cantc: number=0;
  cantb: number=0;
  total!: number;
  tc:boolean=false;
  nombre!:string;
  opcSelect:string='No';

  validar(){
    var cantmb=this.cantb *7;
    if (this.cantb <= cantmb){
      return this.cantb
    }
        else{
          return 0
        }       
}
  realizarC(){
    this.validar();
    this.total = this.cantb * 12
        if (this.cantb > 5){
          this.total = this.total - (this.total * 0.15);
        }           
        else if((this.cantb >= 3) && (this.cantb <= 5)){
          this.total = this.total - (this.total * 0.10)
        }        
        if (this.tc == true){
          this.total = this.total - (this.total * 0.10)         
        }
        return this.total       
  }
}

