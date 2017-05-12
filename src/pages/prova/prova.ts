import { HttpService } from './../../providers/http-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the Prova page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-prova',
  templateUrl: 'prova.html',
  providers: [HttpService]
})
export class Prova {
  perguntas:any;
  alternativas:any;
  resposta:any;
  i:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService, public alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.list_perguntas();
    this.list_respostas();
  }

  list_perguntas(){
    this.httpService.builder('enunciados')
      .list()
      .then((res) => {
        this.perguntas = res;
        console.log('pergunta');
        
    });
  }

  list_respostas(){
    this.httpService.builder('respostas')
      .list()
      .then((res) => {
        this.alternativas = res;
        console.log('pergunta');
        
    });
  }

  responder(resposta){
    this.resposta = resposta;
    this.salvar(this.resposta);
    if(resposta.status){
      let alert = this.alertCtrl.create({
        title:'CORRETO! :)',
        subTitle:'Respota correta! em breve novas perguntas estão disponiveis :)',
        buttons: ['Sair']
      })
      alert.present().then((res)=>{
        this.navCtrl.popToRoot();
      });
    }else{
      let alert = this.alertCtrl.create({
          title:'ERRADO! :/',
          subTitle:'Que pena, não foi dessa vez :/ Mas não desanime !<br>Fique atento a novas perguntas para se tornar cada vez melhor !',
          buttons: ['Sair']
      });
      alert.present().then((res)=>{
        this.navCtrl.popToRoot();
      });
    }
    
  }

  salvar(res){
    this.httpService.builder('alternativas')
      .insert({resposta_id: res.id, status: res.status})
      .then((res) => {
        console.log('res');
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Prova');
  }

}
