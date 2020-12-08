import { Component, OnInit, Input } from '@angular/core';
import { ChallengesService } from '../challenges.service';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ChallengesListComponent implements OnInit {

@Input() allChallenges: any[]

  constructor(public challengeService: ChallengesService) { }

  ngOnInit(): void {
    this.challengeService.getAllChallenges().subscribe((challenge: any) => {
      this.allChallenges = challenge
    })
  }

}
