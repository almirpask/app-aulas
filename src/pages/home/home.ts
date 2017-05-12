import { HttpService } from './../../providers/http-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HttpService]
})
export class HomePage {
  relatorio:any;
  questionarios:any;
  acertos:any;
  erros:any;
  respostas:any;

  constructor(public navCtrl: NavController, public httpService: HttpService) {

  }

  ngOnInit(){
    this.getRelatorio();

  }

  getRelatorio(){
    this.httpService.builder('relatorios')
      .list()
      .then((res) => {
        this.relatorio = res;
        this.questionarios = this.relatorio.questionarios;
        this.acertos = this.relatorio.acertos;
        this.erros = this.relatorio.erros;
        this.respostas = this.relatorio.respostas;
    });
  }
  

}
