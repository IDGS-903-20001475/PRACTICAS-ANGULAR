import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia2p',
  templateUrl: './distancia2p.component.html',
  styleUrls: ['./distancia2p.component.css']
})
export class Distancia2pComponent {
  x1!: number;
  x2!: number;
  y1!: number;
  y2!: number;
  res: number=0;

  calcularDistancia() {
    const r = Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2);
    this.res = Math.sqrt(r);
  }
}
