import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { ChallengesService } from '../challenges.service';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ChallengesListComponent implements OnInit {

@Input() allChallenges: any[]

  constructor(
    private challengeService: ChallengesService,
    private router: Router,
    private userService: UserService
    ) {  }

  ngOnInit(): void {
    const activeRouterChild = this.router.routerState.snapshot.url.split('/').reverse()[0]

    if(activeRouterChild === 'my'){
      const currentUserId = this.userService.currentUser._id
      this.challengeService.getMyChallenges(currentUserId).subscribe({
        next: (res) => {
          this.allChallenges = res.allActivities
        }
      })
    }else {
      this.challengeService.getAllChallenges().subscribe((challenge: any) => {
        this.allChallenges = challenge
      })
    }
  }

}
