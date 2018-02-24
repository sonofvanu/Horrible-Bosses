import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MessageModuleServiceService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  private userMessage='http://localhost:9053/messageUser';
  private circleMessage='http://localhost:9053/messageCircle';

userid='gamma@gmail.com';
  getSingleUserMessage(id:string){
    return this.http.get(this.userMessage+'/'+id+'/'+this.userid+"/");
  }

getSingleCircleMessage(id:number){
  const circleId:number=id;
  return this.http.get(this.circleMessage+'/'+circleId+'/');
}

}
