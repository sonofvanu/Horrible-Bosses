import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserModuleComponentComponent } from './module-components/user-module-component/user-module-component.component';
import { CircleModuleComponentComponent } from './module-components/circle-module-component/circle-module-component.component';
import { MessageModuleComponentComponent } from './module-components/message-module-component/message-module-component.component';
import { UserModuleServiceService } from './module-services/UserModuleService/user-module-service.service';
import { CircleModuleServiceService } from './module-services/CircleModuleService/circle-module-service.service';
import { MessageModuleServiceService } from './module-services/MessageModuleService/message-module-service.service';
import { HttpModule } from '@angular/http/';
import { AppRoutingModule } from './module-router/app-routing.module';
import { CreateCircleModalService } from './module-services/create-circle-modal.service';
import { CreateCircleService } from './module-services/CreateCircleService/create-circle.service';



@NgModule({
  declarations: [
    AppComponent,
    UserModuleComponentComponent,
    CircleModuleComponentComponent,
    MessageModuleComponentComponent
  ],
  imports: [
    BrowserModule,HttpModule, AppRoutingModule
  ],
  providers: [UserModuleServiceService, CircleModuleServiceService, MessageModuleServiceService, CreateCircleModalService, CreateCircleService],
  bootstrap: [AppComponent],
  entryComponents:[CircleModuleComponentComponent,UserModuleComponentComponent]
})
export class AppModule { }
