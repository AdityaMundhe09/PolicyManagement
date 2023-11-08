import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { GroupType } from 'src/app/types/GroupTypes/GroupType';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent {

  constructor(private groupService : GroupService, private router : Router, private route : ActivatedRoute){}

  editId! : any;
  group : GroupType = {
    id:1,
    name:'',
    created_at:'',
    updated_at:''
  }

  ngOnInit(){
    this.editId = this.route.snapshot.paramMap.get('id');
    this.groupService.getGroup(this.editId).subscribe((result : any)=>{
      this.group = result;
    },error=>{
      console.log(error);
    })
  }

  update(){
    this.groupService.updateGroup(this.group,this.editId).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/groups']);
    },error => {
      console.log(error);
    })
  }
}
