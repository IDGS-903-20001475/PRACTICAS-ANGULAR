import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';
import { Distancia2pComponent } from './distancia2p/distancia2p.component';

const routes:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'Cinepolis', component:CinepolisComponent},
  {path:'Resistencias',component:ResistenciasComponent},
  {path:'Distancia2P',component:Distancia2pComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
