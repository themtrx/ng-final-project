import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerImg: string;

  constructor() {
    this.registerImg = '../../../assets/img/register.png'

  }

  ngOnInit(): void {
  }

}
