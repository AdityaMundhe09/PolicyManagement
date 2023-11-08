import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorePolicy } from '../types/policyTypes/StorePolicy';
import { PolicyType } from '../types/policyTypes/PolicyType';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:8000/api/policies';

  getPolicies(){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.get(this.url,{headers});
  }

  savePolicy(data : StorePolicy){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.post(this.url,data,{headers});
  }

  getPolicy(id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.get(this.url+`/${id}`,{headers});
  }

  updatePolicy(data : PolicyType,id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.put(this.url+`/${id}`,data,{headers});
  }

  deletePolicy(id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.delete(this.url+`/${id}`,{headers});
  }
}
