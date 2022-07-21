import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template:`
    <h1>{{ title }}</h1>

<button (click)="acomular(+1)">+1</button>

<samp>{{ numero }}</samp>

<button (click)="acomular(-1)">-1</button>

<h3> Acomulador base: <strong>{{base}}</strong></h3>

<button (click)="acomular2(+base)">+{{base}}</button>

<samp>{{ basebase }}</samp>

<button (click)="acomular2(-base)">-{{base}}</button>
    `
})

export class ContadorComponent{
    title: string = 'Contador  App';
  numero: number = 10;
  basebase:number=5;
  base:number=5;

  acomular(valor:number){
    this.numero +=valor;
  }

  acomular2(valor:number){
    this.basebase +=valor;
  }

}