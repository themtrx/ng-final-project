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

  loginHandler(data: Object) {
    this.errormsg = '';
    this.userService.login(data).subscribe({
      next : (res) => {
        this.router.navigate(['challenges/get'])
      },
      error: (err) => {
        this.errormsg = 'Error!'
      }
    })
  }

  ngOnInit(): void {

  }

}
