import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';

@Injectable()
export class SubmitphotosProvider {

  constructor(public http: Http) {
    
  }
  public submitPhotos(token:String,obj: Object): Observable<any> {
    var start = new Date().getTime();
   // console.log(obj);
    let headers = new Headers({ 'Content-Type': 'application/json','Authorizatio':token});
    let options = new RequestOptions({ headers: headers});
    const url = "https://g1yy9fddoh.execute-api.us-east-1.amazonaws.com/default/eHome-Photoupload";
    
    return this.http
      .post(url, obj,options)
      .map((response: Response) => {
        var end = new Date().getTime();
        var time = end - start;
         if (response) {
         console.log('************ Execution time: ' + time);
         console.log(response);
          return response.json();
        }
      })
      .catch((error: any) => {
        console.log("****error" + error);
        return Observable.throw(error);
      });
  }

}
