import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.css']
})
export class ChallengeCardComponent implements OnInit {
  
  @Input() challenge: any
  user: string = this.userService.currentUser.username

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
