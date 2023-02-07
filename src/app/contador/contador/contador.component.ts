import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es: {{ base }}</h3>

    <span>{{ numero }}</span>
    <button (click)="modificar(base)">+</button>
    <button (click)="modificar(-base)">-</button>

    `
})

export class ContadorComponent {
    constructor() { }
    titulo: string = 'Contador app';
    numero: number = 10;
    base: number = 10;

    modificar(valor: number) {
        this.numero += valor;
    }

}