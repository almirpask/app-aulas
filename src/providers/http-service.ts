import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {
  url:string;
  constructor(public http: Http) {
    console.log('Hello HttpService Provider');
  }

  builder(resource:string){
    
    this.url = 'https://appaulas.herokuapp.com/api/'+ resource;
    
    return this
  }

  list(){
    console.log('listar');
    console.log(this.http.get(this.url)
      .toPromise());
    return this.http.get(this.url)
      .toPromise()
      .then((res)=>{
        return res.json() || {};
      });
  }

  insert(data: Object){
    return this.http.post(this.url, data)
      .toPromise()
      .then((res)=>{
        return res.json() || {};
      });

  }

}
