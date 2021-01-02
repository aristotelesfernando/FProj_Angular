import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";

  adicionarclique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  // usando a última forma de two-way-bidding este código se torna desnecessário
  // keyUp(event: any){
  //   this.nome = event.target.value;
  // }

}
