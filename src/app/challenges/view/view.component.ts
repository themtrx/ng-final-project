import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengesService } from '../challenges.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-view-challenge',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewChallengeComponent implements OnInit {

  @Input() challenge: any

  constructor(
    private challengeService: ChallengesService,
    private router: ActivatedRoute,
    public location: Location
  ) { 
    this.challenge = Object.create(null)
   }

   prevPage(e: any): void {
    e.preventDefault()
    e.stopPropagation()
     this.location.back()
   }

  ngOnInit(): void {
    const challengeId = this.router.snapshot.params.id
    this.challengeService.viewChallenge(challengeId).subscribe( challnege =>
      this.challenge = challnege
    )
  }

}
