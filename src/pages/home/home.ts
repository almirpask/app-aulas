import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  testes: string;
  constructor(public navCtrl: NavController) {

  }

  teste(){
     this.testes = "vc clicou no botao teste";
  }
  

}
