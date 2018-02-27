import { Component, OnInit,Input } from '@angular/core';
import { Message } from '../../module-model/MessageModel';
import { MessageModuleServiceService } from '../../module-services/MessageModuleService/message-module-service.service';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {
  closeResult: string;
  model: any = {};
  title = 'Horrible-Bosses';
  messages: Message[];
  private bodyText: string;
  @Input() userId: string
  @Input()circleId: number;
  cl: number;
  sendMessage: Message;
  message: string;
  msg: string;
  constructor(private messageService: MessageModuleServiceService) { }

  ngOnInit() {
  }

  sendAMessage(event)
{

  if (event.keyCode == 13) {
    this.message = event.target.value;
    this.sendMessage = new Message();
    this.sendMessage.circleId = this.circleId;
    this.sendMessage.messageActual = this.message;
    this.sendMessage.messageSentOn = new Date();
    this.sendMessage.messageVisibility = true;
    this.sendMessage.receiverId = this.userId;
    this.sendMessage.senderId = "gamma@gmail.com";
    console.log(this.message);
    this.messageService.sendMessage(this.sendMessage, this.userId, this.circleId);

  }
}
}
