import { Component } from '@angular/core';
import {LoginForm} from '../../types/Auth';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userAuth : UserAuthService, private router : Router){}

  form : LoginForm = {
    email:'',
    password:''
  }

  login(){
    this.userAuth.login(this.form).subscribe((result:any)=>{
      localStorage.setItem("access_token",result.access_token);
      this.router.navigate(['/']);

    },error => {
      console.log(error)
    }
    );
  }

}
