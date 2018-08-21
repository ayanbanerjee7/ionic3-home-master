import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginProvider {

  constructor(public http: Http) {
    console.log('Hello LoginProvider Provider');
  }
  public login(obj: Object): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    const url = "https://i7esfq8jwe.execute-api.us-east-1.amazonaws.com/default/eHome-Auth";
    
    return this.http
      .post(url, obj,options)
      .map((response: Response) => {
          if (response) {
       
          return response.json();
        }
      })
      .catch((error: any) => {
        console.log("****error" + error);
        return Observable.throw(error);
      });
  }
}
