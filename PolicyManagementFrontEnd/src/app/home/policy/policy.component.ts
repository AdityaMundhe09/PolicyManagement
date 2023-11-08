import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/services/policy.service';
import { PolicyType } from 'src/app/types/policyTypes/PolicyType';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent {

  constructor(private policyService : PolicyService, private router : Router){}

  policies : PolicyType[] = [];

  ngOnInit(){
    this.getPolicies();
  }

  getPolicies(){
    this.policyService.getPolicies().subscribe((result : any)=>{
      this.policies = result.data;
    },error => {
      console.log(error);
    })
  }

  deletePolicy(id : number){
    this.policyService.deletePolicy(id).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/policies']);
    },error => {
      console.log(error);
    })
  }
}
