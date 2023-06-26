import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Distancia2pComponent } from '../distancia2p/distancia2p.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    Distancia2pComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    Distancia2pComponent
  ]
})
export class Distancia2pModule { }
