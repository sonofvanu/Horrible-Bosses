import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Message } from '../../module-model/MessageModel';
import { AppComponent } from '../../app.component';

@Injectable()
export class MessageModuleServiceService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  private userMessage='http://localhost:9053/messageUser';
  private circleMessage='http://localhost:9053/messageCircle';

userid='milaga@gmail.com';
  getSingleUserMessage(id:string){
    return this.http.get(this.userMessage+'/'+id+'/'+this.userid+"/");
  }

getSingleCircleMessage(id:number){
  const circleId:number=id;
  return this.http.get(this.circleMessage+'/'+circleId+'/');
}

sendMessage(message:Message,userId:string,circleId:number)
{
  console.log("going to send message"+message);
    console.log(message);
    this.http.post(this.userMessage+"/",message).subscribe(res => console.log(res));
    }

}
