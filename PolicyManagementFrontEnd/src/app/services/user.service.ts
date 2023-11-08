import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:8000/api/users';

  getAllUsers(){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.get(this.url,{headers});
  }
}
