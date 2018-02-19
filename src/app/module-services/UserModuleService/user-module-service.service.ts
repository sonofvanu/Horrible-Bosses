import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class UserModuleServiceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http:Http) { }

  private usersUrl='http://localhost:9051/user';

  getUsers(){
      return this.http.get(this.usersUrl);
  }

}
