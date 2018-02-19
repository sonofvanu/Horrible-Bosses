import { Component } from '@angular/core';
import { UserModuleComponentComponent } from './module-components/user-module-component/user-module-component.component';
import { CircleModuleComponentComponent } from './module-components/circle-module-component/circle-module-component.component';
import { UserRegistration } from './module-model/UserModel';
import { Circle } from './module-model/CircleModel';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserModuleServiceService } from './module-services/UserModuleService/user-module-service.service';
import { CircleModuleServiceService } from './module-services/CircleModuleService/circle-module-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import { ViewChild } from '@angular/core';
import { MessageModuleComponentComponent } from './module-components/message-module-component/message-module-component.component';
import { MessageModuleServiceService } from './module-services/MessageModuleService/message-module-service.service';
import { Message } from './module-model/MessageModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'Horrible-Bosses';
  users:UserRegistration[];
  circles:Circle[];
  circle:Circle;
  messages:Message[];

  
  

  constructor(private userService:UserModuleServiceService,
  private circleService:CircleModuleServiceService,private actvatedroute:ActivatedRoute,
  private location:Location,
private messageService:MessageModuleServiceService,
){    
  }

  ngOnInit(): void {
    this.getUsers();
    this.getCircles();
    this.getCircleMesssages();
    //this.getselectedcircle(Event);
  }
  
  getUsers():void{
    this.userService.getUsers().subscribe(
    (data)=>{
      this.users=data.json();
    }
    );
    
  }


  getCircles():void{
    this.circleService.getCircles().subscribe(
    (data)=>{
      this.circles=data.json();
    }
    );
    
  }

  
  getselectedcircle($event){
    this.circle=$event;
    console.log(this.circle.circleName+'     gng to fetch its messages');
    return this.circle.circleId;
  }

  getCircleMesssages():void{
    const id:number=this.getselectedcircle(Event);
    console.log(id);
this.messageService.getSingleCircleMessage(id).subscribe(
(data)=>{
  this.messages=data.json();
}
);
  }


}
