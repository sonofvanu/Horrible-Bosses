import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { UserCircle } from '../../module-model/UserCircleModel';

@Injectable()
export class UserCircleService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private userCircleUrl="http://localhost:9054/addUserToCircle";
  
  constructor(private http: Http) { }

  joinUserToCircle(userCircle:UserCircle)
  {
    console.log("going to add"+userCircle.userId);
    this.http.post(this.userCircleUrl+'/',userCircle).subscribe(res => console.log(res));
  
  }


  removeUserFromCircle(userCircle:UserCircle)
  {
    this.http.put("http://localhost:9054/removeUserFromcircle/",userCircle).subscribe(res => console.log(res));
  }

  userCircles(userId:string)
  {
    console.log("going to get the circles of "+userId);
    return this.http.get("http://localhost:9054/usersCircles/"+userId+"/");
  }


}
