import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CinepolisModule} from './modulos/cinepolis.module';
import { ResistenciasModule } from './modulos/resistencias.module';
import { Distancia2pModule } from './modulos/distancia2p.module'
import { MenuComponent } from './menu/menu.component';
import { PizzasModule } from './modulos/pizzas.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    CinepolisModule,
    ResistenciasModule,
    Distancia2pModule,
    PizzasModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
