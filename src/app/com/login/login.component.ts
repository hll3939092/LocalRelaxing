import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Headers, RequestOptions, URLSearchParams, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;Access-Control-Allow-Origin:*' });
  private options = new RequestOptions({ headers: this.headers });
  // private access_token: string;
  // private token_type: string;
  // private scope: string;
  private token: Token;
  private code: string;
  private access_token: string;
  constructor(private activatedRoute: ActivatedRoute, private http: Http) { }

    ngOnInit() {
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.code = params['code'];
        this.access_token = params['access_token'];
        alert(this.code);
        alert(this.access_token);
        console.log(this.code);

    });
  }

  // login(){
  //   this.submit(this.code);
  // }
  //
  // private extractData(res: Response) {
  //   if (res.status < 200 || res.status >= 300) {
  //     throw new Error('Bad response status: ' + res.status);
  //   }
  //   let body = res.json();
  //   return body.data || { };
  // }

  getHeroes() {
    const data = new URLSearchParams();
    data.append('client_id', 'ef7eadcf10f1c729a7ea');
    data.append('client_secret', '8dbae7190ccf4b4ac39088d1318548a4d75a7d68');
    data.append('code', this.code);
    // this.http.post('https://github.com/login/oauth/access_token', data, this.options).subscribe( data => {
    //   this.access_token = data['access_token'];
    //   this.token_type = data['token_type'];
    //   this.scope = data['scope'];
    // });
    this.http.post('https://github.com/login/oauth/access_token' +
      '', data, this.options).toPromise().then( res => {
        console.log(res);
    }
    );
  }

  // submit(code: string) {
  //   const data = new URLSearchParams();
  //
  //
  //   data.append('client_id', 'ef7eadcf10f1c729a7ea');
  //   data.append('client_secret', '8dbae7190ccf4b4ac39088d1318548a4d75a7d68');
  //   data.append('code', code);
  //   const json = this.http.post('https://github.com/login/oauth/access_token', data, this.options).
  //   toPromise().then(response => response.json()
  //   );
  //   console.log(json);
  // }

}


class Token {
  access_token: string;
  token_type: string;
  scope: string;
}
