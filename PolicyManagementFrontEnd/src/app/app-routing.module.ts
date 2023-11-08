import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PolicyComponent } from './home/policy/policy.component';
import { CategoryComponent } from './home/category/category.component';
import { UserGroupsComponent } from './home/user-groups/user-groups.component';
import { AddCategoryComponent } from './home/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './home/category/update-category/update-category.component';
import { AddGroupComponent } from './home/user-groups/add-group/add-group.component';
import { UpdateGroupComponent } from './home/user-groups/update-group/update-group.component';
import { AddPolicyComponent } from './home/policy/add-policy/add-policy.component';
import { UpdatePolicyComponent } from './home/policy/update-policy/update-policy.component';
import { AddMemberComponent } from './home/user-groups/add-member/add-member.component';

const routes: Routes = [
  //-----------------Home Route--------------------------------
  {path:'',component:HomeComponent},
  //-----------------User Auth Route----------------------------
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},


  //-----------------Policies Route------------------------------
  {path:'policies',component:PolicyComponent},
  {path:'policies/add',component:AddPolicyComponent},
  {path:'policies/update/:id',component:UpdatePolicyComponent},


  //-----------------Categories Route----------------------------
  {path:'categories',component:CategoryComponent},
  {path:'categories/add',component:AddCategoryComponent},
  {path:'categories/update/:id',component:UpdateCategoryComponent},


  //-----------------Groups Route--------------------------------
  {path:'groups',component:UserGroupsComponent},
  {path:'groups/add',component:AddGroupComponent},
  {path:'groups/update/:id',component:UpdateGroupComponent},
  {path:'groups/addMember/:id',component:AddMemberComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
