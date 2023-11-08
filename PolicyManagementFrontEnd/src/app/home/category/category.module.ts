import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { UserGroupsComponent } from '../user-groups/user-groups.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CategoryComponent, AddCategoryComponent, UpdateCategoryComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
