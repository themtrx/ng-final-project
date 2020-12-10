import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginImg: string;

  constructor(private userService: UserService) {
    this.loginImg = '../../../assets/img/login.png'

  }

  loginHandler(data: Object) {
    this.userService.login(data).subscribe({
      next : (res) => {
        console.log(res)
      }
    })
  }

  ngOnInit(): void {

  }

}
