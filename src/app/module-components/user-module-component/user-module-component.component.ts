import {Component, OnInit} from '@angular/core';
import {UserRegistration} from '../../module-model/UserModel';
import {UserModuleServiceService} from '../../module-services/UserModuleService/user-module-service.service';
import {AppComponent} from '../../app.component';
import {Input, EventEmitter, Output} from '@angular/core';
import {NgModule} from '@angular/core/src/metadata/ng_module';

@Component({
  selector: 'app-user-module-component',
  templateUrl: './user-module-component.component.html',
  styleUrls: ['./user-module-component.component.css']
})


export class UserModuleComponentComponent implements OnInit {

  @Input() users: UserRegistration[];
  
  
  selectedUser: UserRegistration;


  @Output() userSelected = new EventEmitter<string>();

  constructor(private userModuleService: UserModuleServiceService) {}

  ngOnInit() {


  }

  onSelect(id: string) {
    console.log("going to get messages from " + id);
    this.userSelected.emit(id);

  }

}
