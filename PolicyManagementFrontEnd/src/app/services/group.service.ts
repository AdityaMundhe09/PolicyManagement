import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreGroup } from '../types/GroupTypes/StoreGroup';
import { GroupType } from '../types/GroupTypes/GroupType';
import { AddMemberType } from '../types/GroupTypes/AddMemberType';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http : HttpClient) { }

  url : string = 'http://localhost:8000/api/groups';
  url1 : string = 'http://localhost:8000/api/addMember';


  getGroups(){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.get(this.url,{headers});
  }

  saveGroup(data : StoreGroup){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.post(this.url,data,{headers});
  }

  getGroup(id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.get(this.url+`/${id}`,{headers});
  }

  updateGroup(data : GroupType,id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.put(this.url+`/${id}`,data,{headers});
  }

  deleteGroup(id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.delete(this.url+`/${id}`,{headers});
  }

  addMember(data : AddMemberType,id : number){
    let headers = new HttpHeaders().set("Authorization",`Bearer ${localStorage.getItem('access_token')}`);
    return this.http.post(this.url1+`/${id}`,data,{headers});
  }
}
