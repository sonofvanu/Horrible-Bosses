import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessageModuleComponentComponent } from '../module-components/message-module-component/message-module-component.component';



const routes:Routes =[
  {path:'messages',component:MessageModuleComponentComponent},
  {path:'messages/:id',component:MessageModuleComponentComponent},
    
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
