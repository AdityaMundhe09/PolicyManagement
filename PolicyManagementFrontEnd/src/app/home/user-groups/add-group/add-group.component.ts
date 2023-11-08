import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group.service';
import { StoreGroup } from 'src/app/types/GroupTypes/StoreGroup';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent {

  constructor(private groupService : GroupService, private router : Router){}

  form : StoreGroup = {
    name:''
  }

  save(){
    this.groupService.saveGroup(this.form).subscribe((result : any)=>{
      console.log(result);
      this.router.navigate(['/groups']);
    },error => {
      console.log(error);
    })
  }
}
