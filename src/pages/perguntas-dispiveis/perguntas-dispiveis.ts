import { Prova } from './../prova/prova';
import { HttpService } from './../../providers/http-service';
import { PerguntasDisponiveis } from './../../providers/perguntas-disponiveis';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerguntasDispiveis page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perguntas-dispiveis',
  templateUrl: 'perguntas-dispiveis.html',
  providers: [PerguntasDisponiveis, HttpService]
})
export class PerguntasDispiveis {
  rootPage:any = Prova;
  questionarios:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: PerguntasDisponiveis, public httpService: HttpService) {
    //this.questionarios = service.getQuestionarios('questionarios');
    //console.log(this.questionarios);
  }

  ngOnInit(){
    this.list();
  }

  list(){
    this.httpService.builder('questionarios')
      .list()
      .then((res) => {
        this.questionarios = res;
        console.log('questionarios');
        console.log(this.questionarios);
      })
    
    
  }
  
  openQuestionario(){
    console.log('abrir questionario');
    this.navCtrl.push(Prova);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasDispiveis');
  }

}
