import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginImg: string;

  constructor() {
    this.loginImg = '../../../assets/img/login.png'

  }

  ngOnInit(): void {
  }

}
