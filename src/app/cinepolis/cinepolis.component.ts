import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  cantc!: number;
  cantb!: number;
  cantbo:number=0;
  nom:string="";
  total!: number|string;

  nombre!:string;
  opcSelect:string='No';


  opc=[
    'Si',
    'No'
  ];

  realizarC() {
    var cantmb = this.cantc * 7;
    if (this.cantb > cantmb) {
      this.cantbo=this.cantb;
      this.total = "No se pueden vender más de 7 boletos por persona";
    } else {
      this.total = this.cantb * 12;
      if (this.cantb > 5) {
        this.total = this.total - (this.total * 0.15);
      } else if (this.cantb >= 3 && this.cantb <= 5) {
        this.total = this.total - (this.total * 0.10);
      }
      if (this.opcSelect == 'Si') {
        this.total = this.total - (this.total * 0.10);
      }
      this.cantbo = this.cantb;
      this.nom = this.nombre;
      
    }
    return this.total;
  }

  limpiar(){
    this.nom=''
    this.cantbo=0
    this.nombre=''
    this.cantb=0
    this.cantc=0
    this.total=''
  }
}

