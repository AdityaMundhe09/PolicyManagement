import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { UserService } from 'src/app/services/user.service';
import { AddMemberType } from 'src/app/types/GroupTypes/AddMemberType';
import { UserInfo } from 'src/app/types/UserTypes/UserInfo';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent {

  constructor(private groupService : GroupService, private userService : UserService, private router : Router, private route : ActivatedRoute){}

  users : UserInfo[] = [];

  group_id! : any;

  form : AddMemberType = {
    user_id : []
  }

  ngOnInit(){
    this.group_id = this.route.snapshot.paramMap.get('id');
    this.getUsers();
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((result : any)=>{
      this.users = result.data;
    },error=>{
      console.log(error);
    })
  }

  add(){
    this.groupService.addMember(this.form,this.group_id).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/groups']);
    },error=>{
      console.log(error);
  })
  }
}
