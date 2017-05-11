import { Injectable } from '@angular/core';
import { Http,Response , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the PerguntasDisponiveis provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PerguntasDisponiveis {
  
  private headers: Headers;

  constructor(public http: Http) {
    console.log('Hello PerguntasDisponiveis Provider');
    this.setAccessToken();
   
  }
  
  setAccessToken(){
    let token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNhMDEwMWIwMTI4ZmU4NDliYWQ4Zjg4YWRmYWIyOTk1MGFkN2Y1Zjg5M2MwMDA3MGNlMTUyOGNjZTM4NDllMTU4OTYwMTczZjJiZTk2YWM5In0.eyJhdWQiOiIyIiwianRpIjoiM2EwMTAxYjAxMjhmZTg0OWJhZDhmODhhZGZhYjI5OTUwYWQ3ZjVmODkzYzAwMDcwY2UxNTI4Y2NlMzg0OWUxNTg5NjAxNzNmMmJlOTZhYzkiLCJpYXQiOjE0OTM3NjI5NTcsIm5iZiI6MTQ5Mzc2Mjk1NywiZXhwIjoxNTI1Mjk4OTU3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.lCahMPkxHUg6rb7caYckbkYv4iB43k_-V8RwyqmEqUK5bJJbWIlxBNIg1BmIEJ1eunoWJBLTocIDOFG0C6cLej7StiI0RbqJd5d2e_p3BgCxo9RjWiKf1-hk8g_tMbawpz4ivna4wUTtP723iOW5YibQKJ5lBVRCOHtrPSO7ff_9Yb1XL2CjI5nVLhAtsUo8THFgjrN8TNy82cTiXLcKf1omf-ydmjD0FczUhOqCt8x6me6uVaBXQ9CekKUNb0hGlbCr2wpxPPuJBGYMTKqP48v35HgxxVRSxSpyT23IX_4fjlpZja1ZqtjXJ_PyYFFy4WZoY0spd-sguoZ0gC-WZG5TJ51WLrSu3RnnfAMyXwjtkY5rpl_L9IwxlIwjeLC0wgmQKaZs0VuYZiuCTDvu9TPYmcvYSiPS82l4H_nsG_PB2_Aq9LW__oMrGLCiIjX70rllMM3jrLOAZ0MPLRaWOIjcQ_od14t3mEHeHa9lS8qeYlpbsPXN9671qt92xUVXq4Jkd97rqb8d49ufzI4GyQD1nTwpmQEBly8IiDtBo-rKwe_UbtKQ6kLuk-udTXz86vwMSUwgS2qZJT0nH7e5YxtEPmxmewzA99s9PR0rwmkbPjtTWrzdNi8ln-pH2hUPbi9SiVs7nsMwHGIYnfmz4Vio0QZxh9maX2i-ggK1QVo';
    this.headers = new Headers({'Authorization': token});
  }

 

  
  getQuestionarios(): Promise<Response>{
    console.log(this.http.get("http://localhost:8000/api/eventos/1", {headers:this.headers})
    .toPromise());
    return this.http.get("http://localhost:8000/api/eventos/1", {headers:this.headers})
    .toPromise().then((res) => {
      return res.json() || {};
    });
  }
}
