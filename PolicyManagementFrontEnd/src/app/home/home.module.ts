import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PolicyComponent } from './policy/policy.component';
import { CategoryComponent } from './category/category.component';
import { UserGroupsComponent } from './user-groups/user-groups.component';
import { AppRoutingModule } from '../app-routing.module';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { CategoryModule } from './category/category.module';
import { AddGroupComponent } from './user-groups/add-group/add-group.component';
import { UpdateGroupComponent } from './user-groups/update-group/update-group.component';
import { UserGroupsModule } from './user-groups/user-groups.module';
import { AddPolicyComponent } from './policy/add-policy/add-policy.component';
import { UpdatePolicyComponent } from './policy/update-policy/update-policy.component';
import { PolicyModule } from './policy/policy.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CategoryModule,
    AppRoutingModule,
    UserGroupsModule,
    PolicyModule
  ],
  exports : [HomeComponent]
})
export class HomeModule { }
