import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PolicyService } from 'src/app/services/policy.service';
import { PolicyType } from 'src/app/types/policyTypes/PolicyType';

@Component({
  selector: 'app-update-policy',
  templateUrl: './update-policy.component.html',
  styleUrls: ['./update-policy.component.css']
})
export class UpdatePolicyComponent {
  constructor(private policyService : PolicyService, private router : Router, private route : ActivatedRoute){}
  editId! : any;
  policy : PolicyType = {
    id:1,
    title:'',
    creator_id:1,
    created_at:'',
    updated_at:''
  }

  ngOnInit(){
    this.editId = this.route.snapshot.paramMap.get('id');
    this.policyService.getPolicy(this.editId).subscribe((result : any)=>{
      this.policy = result;
    },error => {
      console.log(error);
    })
  }

  update(){
    this.policyService.updatePolicy(this.policy,this.editId).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/policies']);
    },error => {
      console.log(error);
    })
  }
}
