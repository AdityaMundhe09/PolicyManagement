import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGroupComponent } from './add-group/add-group.component';
import { UpdateGroupComponent } from './update-group/update-group.component';
import { UserGroupsComponent } from './user-groups.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddMemberComponent } from './add-member/add-member.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [UserGroupsComponent, AddGroupComponent, UpdateGroupComponent, AddMemberComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class UserGroupsModule { }
