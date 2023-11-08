import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { GroupType } from 'src/app/types/GroupTypes/GroupType';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.css']
})
export class UserGroupsComponent {

  constructor(private groupService : GroupService, private router : Router){}

  groups : GroupType[] = [];

  ngOnInit(){
    this.getGroupsList();
  }

  getGroupsList(){
    this.groupService.getGroups().subscribe((result : any)=>{
      this.groups = result.data;
    },error => {
      console.log(error);
    })
  }

  deleteGroup(id : number){
    this.groupService.deleteGroup(id).subscribe((result : any)=>{
      console.log(result);
      this.router.navigate(['/groups']);

    },error => {
      console.log(error);
    })
  }
}
