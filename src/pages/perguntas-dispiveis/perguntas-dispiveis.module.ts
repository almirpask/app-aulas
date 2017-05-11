import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerguntasDispiveis } from './perguntas-dispiveis';

@NgModule({
  declarations: [
    PerguntasDispiveis,
  ],
  imports: [
    IonicPageModule.forChild(PerguntasDispiveis),
  ],
  exports: [
    PerguntasDispiveis
  ]
})
export class PerguntasDispiveisModule {}
