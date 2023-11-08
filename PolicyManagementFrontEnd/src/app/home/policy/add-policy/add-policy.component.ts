import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { GroupService } from 'src/app/services/group.service';
import { PolicyService } from 'src/app/services/policy.service';
import { GroupType } from 'src/app/types/GroupTypes/GroupType';
import { CategoryType } from 'src/app/types/categoryTypes/CategoryType';
import { StorePolicy } from 'src/app/types/policyTypes/StorePolicy';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.css']
})
export class AddPolicyComponent {

  constructor(private policyService : PolicyService, private router : Router, private categoryService : CategoryService, private groupService : GroupService){}

  selectedCategories: number[] = [];

  selectedGroups : number[] = [];

    categories : CategoryType[] = [];

    groups : GroupType[] = [];

    form : StorePolicy = {
      title : '',
      category_id : this.selectedCategories,
      group_id : this.selectedGroups
    }

    ngOnInit(){
      this.getCategories();
      this.getGroups();
    }

    getCategories(){
      this.categoryService.getCategories().subscribe((result : any)=>{
        this.categories = result.data;
      },error =>{
        console.log(error);
      })
    }

    getGroups(){
      this.groupService.getGroups().subscribe((result : any)=>{
        this.groups = result.data;
      },error =>{
        console.log(error);
      })
    }

    save(){
      this.policyService.savePolicy(this.form).subscribe((result)=>{
        console.log(result);
        this.router.navigate(['/policies']);
      },error=>{
        console.log(error);
      })
    }
}
