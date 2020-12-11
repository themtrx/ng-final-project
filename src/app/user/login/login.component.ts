import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginImg: string;
  errormsg: string;

  constructor(
    private userService: UserService,
    private router: Router
    ) {
    this.loginImg = '../../../assets/img/login.png'

  }

  loginHandler({username, password}: {username: string, password: string}) : void {
    this.errormsg = '';

    if(username.length < 5){
      this.errormsg = 'Username should be atleast 5 letters!'
       return
    }
    if(password.length < 5){
      this.errormsg = 'Password should be atleast 5 characters!'
      return
    }

    this.userService.login({username, password}).subscribe({
      next : (res) => {
        const checkForEmpty = Object.keys(res).length

        if(!checkForEmpty) {
          this.errormsg = 'Invalid username or password!'
          return
        }

        this.router.navigate(['challenges/get'])
      },
      error: (res) => {
        if(res.status === 401){
          this.errormsg = res.error.message
        }
      }
    })
  }

  ngOnInit(): void {

  }

}
