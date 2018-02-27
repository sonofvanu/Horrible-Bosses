import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { UserCircle } from '../../module-model/UserCircleModel';

@Injectable()
export class UserCircleService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private userCircleUrl="'http://localhost:9054/addUserToCircle';"
  
  constructor(private http: Http) { }

  joinUserToCircle(userCircle:UserCircle)
  {
    this.http.post(this.userCircleUrl,userCircle);
  }


}
