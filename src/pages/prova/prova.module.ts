import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Prova } from './prova';

@NgModule({
  declarations: [
    Prova,
  ],
  imports: [
    IonicPageModule.forChild(Prova),
  ],
  exports: [
    Prova
  ]
})
export class ProvaModule {}
