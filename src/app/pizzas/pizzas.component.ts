import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {
  clienteForm!: FormGroup;
  pizzas: any[] = [];
  mostrarConfirmacion = true;
  costoTotal = 0;
  ventasDia: any[] = [];
  totalVentasDia = 0;
  tamanio!: string;
  ingredientesJ: boolean=false;
  ingredientesP: boolean=false;
  ingredientesC: boolean=false;
  ingSelect:string=''
  numeroPizzas!: number;
  subtotal!: number;

  constructor(private readonly fb: FormBuilder) {
    this.clienteForm = this.initForm();
  }

  onSubmit(): void {
    this.obtenerValores();
    this.calcularSubtotal();
  }

  obtenerValores() {
    const tam = this.clienteForm.get('tamanio')?.value;
    const np = this.clienteForm.get('numeroPizzas')?.value;
    const ja = this.clienteForm.get('jamon')?.value;
    const pi = this.clienteForm.get('piña')?.value;
    const cha = this.clienteForm.get('champiñones')?.value;

    this.tamanio=tam
    this.numeroPizzas=np
    this.ingredientesJ=ja
    this.ingredientesP=pi
    this.ingredientesC=cha
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaCompra: ['', Validators.required],
      tamanio: ['', Validators.required],
      jamon: [false],
      piña: [false],
      champiñones: [false],
      numeroPizzas: ['', Validators.required]
    });
  }

  calcularSubtotal() {
    let subtotal=0
    switch (this.tamanio) {
      case 'chica':
        subtotal+= 40;
        break;
      case 'mediana':
        subtotal+=80;
        break;
      case 'grande':
        subtotal+=120;
        break;
    }
    if(this.ingredientesJ){
       subtotal+=10
       this.ingSelect+="Jamon "
    }
    if(this.ingredientesP){
      subtotal+=10
      this.ingSelect+="Piña "
   }
   if(this.ingredientesC){
    subtotal+=10
    this.ingSelect+="Champiñones"
 }
    if(this.ingredientesJ==false && this.ingredientesP==false && this.ingredientesC==false){
      this.ingSelect="Ninguno"
    }
  subtotal*=this.numeroPizzas
  this.subtotal=subtotal;
  this.costoTotal+=subtotal;

  this.pizzas.push({
    "tamanio" : this.tamanio,
    "ingredientes":this.ingSelect,
    "numeroPizzas":this.numeroPizzas,
    "subtotal":this.subtotal
  })
    this.tamanio=''
    this.numeroPizzas=0
    this.ingredientesJ=false
    this.ingredientesP=false
    this.ingredientesC=false
    this.ingSelect=''

  }

  quitarpedido(i:number){
    this.costoTotal-=this.pizzas[i].subtotal;
    this.pizzas.splice(i,1);
  }
  confirmarPedido() {
    if(confirm("¿Quieres confirmar la compra?")){
    const venta = {
      cliente: this.clienteForm.value.nombre,
      total: this.costoTotal
    };

    this.ventasDia.push(venta);
    this.totalVentasDia += this.costoTotal;

    this.mostrarConfirmacion = true;
    this.pizzas = [];
    this.costoTotal = 0;
    this.clienteForm.reset();
  }
  }
}
