import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyComponent } from './policy.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { UpdatePolicyComponent } from './update-policy/update-policy.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [PolicyComponent,AddPolicyComponent, UpdatePolicyComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class PolicyModule { }
