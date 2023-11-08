import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginForm, RegisterForm } from '../types/Auth';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http:HttpClient) { }

  url : string = 'http://localhost:8000/api';
  registerUser(data : RegisterForm){
    return this.http.post(this.url+"/register",data);
  }

  login(data : LoginForm){
    return this.http.post(this.url+"/login",data);
  }
}
