import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryType } from 'src/app/types/categoryTypes/CategoryType';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private categoryService : CategoryService,private route : ActivatedRoute, private router : Router){}

  categories : CategoryType[] = [];

  ngOnInit(){
    this.getCategoriesList();
  }

  getCategoriesList(){
    this.categoryService.getCategories().subscribe((result : any)=>{
     
      this.categories = result.data;
      
    },error => {
      console.log(error);
    })
  }


  deleteCategory(id : number){
    this.categoryService.deleteCategory(id).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/categories']);
    },error =>{
      console.log(error);
    })
  }

}
