import { Component, OnInit,Input } from '@angular/core';
import { Circle } from '../../module-model/CircleModel';
import { UserCircle } from '../../module-model/UserCircleModel';
import { UserCircleService } from '../../module-services/UserCircleService/user-circle.service';

@Component({
  selector: 'app-circle-action',
  templateUrl: './circle-action.component.html',
  styleUrls: ['./circle-action.component.css']
})
export class CircleActionComponent implements OnInit {
@Input()circles:Circle[];
userCircle:UserCircle;


  constructor(private userCircleService:UserCircleService) { }

  ngOnInit() {
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

}
