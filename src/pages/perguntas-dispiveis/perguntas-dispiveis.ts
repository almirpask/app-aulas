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
  providers: [PerguntasDisponiveis]
})
export class PerguntasDispiveis {
  questionarios:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: PerguntasDisponiveis) {
    this.questionarios = service.getQuestionarios();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntasDispiveis');
  }

}
