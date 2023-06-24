import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { CinepolisComponent } from '../cinepolis/cinepolis.component';



@NgModule({
  declarations: [
    CinepolisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule
  ],
  exports:[
    CinepolisComponent
  ]
})
export class CinepolisModule { }
