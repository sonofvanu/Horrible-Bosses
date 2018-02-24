import { Time } from '@angular/common/src/i18n/locale_data_api';

export class Message{
    messageId:number;
    circleId:number;
    messageActual:string;
    senderId:string;
    receiverId:string;
    messageVisibility:boolean;
    messageSentOn:Date;
    messageSentAt:Time;
}