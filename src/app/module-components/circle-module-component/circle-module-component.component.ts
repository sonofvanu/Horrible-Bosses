import { Component, OnInit } from '@angular/core';
import { CircleModuleServiceService } from '../../module-services/CircleModuleService/circle-module-service.service';
import { Circle } from '../../module-model/CircleModel';
import { Input } from '@angular/core';
import { UserRegistration } from '../../module-model/UserModel';
import { MessageModuleServiceService } from '../../module-services/MessageModuleService/message-module-service.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-circle-module-component',
  templateUrl: './circle-module-component.component.html',
  styleUrls: ['./circle-module-component.component.css']
})
export class CircleModuleComponentComponent implements OnInit {

  @Input() circles:Circle[];
  
  selectedCircle:Circle;

  
  @Output() cirlceSelected=new EventEmitter<number>();
  

  constructor(private circleModuleService:CircleModuleServiceService) { }

  ngOnInit() {
    
  }
 

  
  onSelect(circleId:number,circleName:string){
    console.log("hello circle "+circleId);
    this.cirlceSelected.emit(circleId);
    
    
    
  }
}
