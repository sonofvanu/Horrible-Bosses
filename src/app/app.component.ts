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
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserCircle } from './module-model/UserCircleModel';
import { UserCircleService } from './module-services/UserCircleService/user-circle.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  closeResult: string;
  model: any = {};
  msg: string;
  title = 'Horrible-Bosses';
  users: UserRegistration[];
  circles: Circle[];
  circle: Circle;
  messages: Message[];
  userId: string
  circleId: number;
  userCircle:UserCircle;
  userCircles:UserCircle[];
  sendMessage: Message;
  message: string;
  circlName:string;
  userName:string;


  constructor(private userService: UserModuleServiceService,
    private circleService: CircleModuleServiceService, private actvatedroute: ActivatedRoute,
    private location: Location,
    private messageService: MessageModuleServiceService,
    private modalService: NgbModal,
    private userCircleService:UserCircleService,
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getCircles();
    
    this.getUserCircles();

  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data.json();
      }
    );

  }


  getCircles(): void {
    this.circleService.getCircles().subscribe(
      (data) => {
        this.circles = data.json();
      }
    );
  }



  getUserCircles()

{
  this.userCircleService.userCircles("milaga@gmail.com").subscribe(
    (data) => {
      this.userCircles = data.json();
    }
  );

  console.log(this.userCircles);
  
}


  getCircleMessages($event): void {
    this.messages=[];
    const id: number = $event;
    console.log(id);
    this.circleId = id;
    this.userId = null;
    this.messageService.getSingleCircleMessage(id).subscribe(
      (data) => {
        this.messages = data.json();
      }
    );


    console.log(this.messages);
  }

  getUserMessages($event): void {
    this.messages=[];
    const id: string = $event;
    console.log(id);
    this.userId = id;
    this.circleId = null;
    this.messageService.getSingleUserMessage(id).subscribe(
      (data) => {
        this.messages = data.json();
      }
    );
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  close(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    console.log(reason);
    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addCircle(circle: Circle) {

    //this.circle.circleName=circleName.toString();
    //this.circleService.createCircle(this.circle);
    console.log(circle.circleName.trim() + " has been created");
    
  }



  register() {
    this.circle = new Circle();
    this.circle.circleName = this.model.name;
    this.circle.createdOn = new Date();
    this.circle.circleStatus = true;
    this.circle.circleId = 1;
    console.log(this.circle);

    console.log("   " + this.circle.circleName);
    this.getDismissReason("hello");
    this.circleService.createCircle(this.circle);
    this.getCircles();
  }




  openOptions(options) {
    this.modalService.open(options).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasonOptions(reason)}`;
    });
  }

  private getDismissReasonOptions(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  openjoincircle(joincircles) {
    this.modalService.open(joincircles).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasonjoincircle(reason)}`;
    });
  }

  private getDismissReasonjoincircle(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  openleavecircle(leavecircles) {
   
    this.modalService.open(leavecircles).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasonleavecircle(reason)}`;
    });
  }

  private getDismissReasonleavecircle(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  addUserToCircle(circleId:number,circleName:string)
  {
    this.userCircle=new UserCircle();
    this.userCircle.circleId=circleId;
    this.userCircle.circleName=circleName;
    this.userCircle.joinedOn=new Date();
    this.userCircle.userId="gamma@gmail.com";
    this.userCircleService.joinUserToCircle(this.userCircle);
    console.log("going to add the user to the circle: "+circleId+"   "+circleName);

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
      this.sendMessage.senderId = "milaga@gmail.com";
      console.log(this.message);
      this.messageService.sendMessage(this.sendMessage, this.userId, this.circleId);
      this.msg=' ';
      this.messages=[];
      if(this.sendMessage.receiverId==null||undefined)
      {
        
        this.messageService.getSingleCircleMessage(this.sendMessage.circleId).subscribe(
          (data) => {
            this.messages = data.json();
          }
        );
      }
      else{

        this.messageService.getSingleUserMessage(this.sendMessage.receiverId).subscribe(
          (data) => {
            this.messages = data.json();
          }
        );


      }
    }
  
    
    
  }

  getCircleName($event)
  {
    this.circlName=$event.value;
  }
  

  
}






