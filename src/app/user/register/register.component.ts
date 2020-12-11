import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerImg: string;
  errormsg: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.registerImg = '../../../assets/img/register.png'

  }

  regHandler(
      {username, password,  rePassword}: 
      {
        username: string,
        password: string,
        rePassword: string
      }
    ): void {
    this.errormsg = '';

    if(password !== rePassword){
      return
    }

    if(username.length < 5){
      this.errormsg = 'Username should be atleast 5 letters!'
       return
    }
    if(password.length < 5){
      this.errormsg = 'Password should be atleast 5 characters!'
      return
    }
    
    this.userService.register({username, password}).subscribe({
      next :(data) => {
        this.router.navigate(['/challenges/get'])
      },
      error: (res) => {
        if(res.status === 409){
          this.errormsg = res.error.message
        }
        return
      }
    })
  }


  ngOnInit(): void {
  }

}
