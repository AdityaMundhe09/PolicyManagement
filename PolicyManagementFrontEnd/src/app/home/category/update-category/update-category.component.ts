import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryType } from 'src/app/types/categoryTypes/CategoryType';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  constructor(private categoryService : CategoryService, private router : Router, private route : ActivatedRoute){}

  editId! : any;
  category : CategoryType = {
    id : 1,
    name : '',
    creator_id : 1,
    created_at : '',
    updated_at : ''
  }

  ngOnInit(){

    this.editId = this.route.snapshot.paramMap.get('id');

    this.categoryService.getCategory(this.editId).subscribe((result : any)=>{
      this.category = result;
    })
  }

  update(){
    this.categoryService.updateCategory(this.category,this.editId).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/categories']);
    },error => {
      console.log(error);
    })
  }


}
