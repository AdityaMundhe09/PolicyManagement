import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { RegisterForm } from 'src/app/types/Auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userAuth : UserAuthService, private route : ActivatedRoute, private router : Router){

  }

  form : RegisterForm = {
    name:'',
    email:'',
    password:'',
    password_confirmation:'',
    role:''
  }

  

  register(){
    this.userAuth.registerUser(this.form).subscribe((response) => {
      this.router.navigate(['/login']);
    });
    
  }
}
