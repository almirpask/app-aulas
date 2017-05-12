import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the PerguntasDisponiveis provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PerguntasDisponiveis {
  

  constructor(public http: Http) {
    console.log('Hello PerguntasDisponiveis Provider');
    
   
  }
  
  
  getQuestionarios(request:string): Promise<Response>{
  
   return this.http.get("http://localhost:8000/api/"+request).toPromise();
  }
}
