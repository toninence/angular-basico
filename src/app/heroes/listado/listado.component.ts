import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';
  
  borrarHeroe(i:number) {
    // this.heroes.splice(i, 1)
    this.heroeBorrado = this.heroes.splice(i, 1)[0]
    // console.log()
  }
}
