import { Circle } from '../../module-model/CircleModel';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';



@Injectable()
export class CircleModuleServiceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { }

  private circlesUrl = 'http://localhost:9060/circle';

  getCircles() {
      return this.http.get(this.circlesUrl);
  }
  
  createCircle(circle:Circle):void
  {
    console.log("got circle in service");
    console.log(circle);
    this.http.post(this.circlesUrl+"/",circle).subscribe(res => console.log(res));
  }

}
