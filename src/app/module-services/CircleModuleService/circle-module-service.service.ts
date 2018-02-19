import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CircleModuleServiceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http:Http) { }

  private circlesUrl='http://localhost:9060/circle';

  getCircles(){
      return this.http.get(this.circlesUrl);
  }

}
