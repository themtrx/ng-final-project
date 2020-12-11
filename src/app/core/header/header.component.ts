import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  get isLogged(): boolean{
    return this.userService.isLogged
  }

  constructor(
    private userService: UserService,
    private router: Router
    ) {
  }

  logOutHandler(){
    this.userService.logOut().subscribe(() => this.router.navigate(['/user/login']))
  }

  ngOnInit(): void {
  }

}
