import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {
  boredImg: string;

  constructor(
    private userService: UserService,
    private router: Router
    ) {
    this.boredImg = '../../../assets/img/day_dreaming_.png'
   }

  ngOnInit(): void {
    if(this.userService.isLogged){
      this.router.navigate(['/challenges/get'])
    }
  }

}
