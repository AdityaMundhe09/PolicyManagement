import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { StoreCategory } from 'src/app/types/categoryTypes/StoreCategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private categoryService : CategoryService, private router : Router){

  }

  form : StoreCategory = {
    name : ''
  };

  save(){
    this.categoryService.saveCategory(this.form).subscribe((result : any) => {
      this.router.navigate(['/categories']);
    },error => {
      console.log(error);
    })
  }

}
 