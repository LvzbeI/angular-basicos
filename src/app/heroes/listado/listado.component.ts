import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] =['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

  eliminado: string = '';

  borrarHeroe(){

    console.log('borrando');
    // remove the last item of an array
   // this.heroes.pop();

      // remove the first item of an array an returns it
   this.eliminado = this.heroes.shift() || '';

    // console.log(eliminado);

  }
}
