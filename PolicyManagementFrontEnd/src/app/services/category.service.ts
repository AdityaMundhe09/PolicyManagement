import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreCategory } from '../types/categoryTypes/StoreCategory';
import { CategoryType } from '../types/categoryTypes/CategoryType';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) {
    
   }

  url : string = 'http://localhost:8000/api/categories';

  

  getCategories(){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.get(this.url,{headers});
  }

  saveCategory(data : StoreCategory){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.post(this.url,data,{headers});
  }

  getCategory(id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.get(this.url+`/${id}`,{headers});
  }

  updateCategory(data : CategoryType,id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.put(this.url+`/${id}`,data,{headers});
  }

  deleteCategory(id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.delete(this.url+`/${id}`,{headers});
  }
}
