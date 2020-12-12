import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengesService } from '../challenges.service';
import { Location } from '@angular/common'
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-view-challenge',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewChallengeComponent implements OnInit {

  @Input() challenge: any
  isAuthor: boolean;
  loader: boolean;

  constructor(
    private challengeService: ChallengesService,
    private router: ActivatedRoute,
    public userService: UserService,
    public location: Location
  ) { 
    this.challenge = Object.create(null)
    this.loader = true;
   }

   prevPage(e: any): void {
    e.preventDefault()
    e.stopPropagation()
     this.location.back()
   }

  editChallenge(data: Object): void {

    this.loader = true
    const id = this.challenge._id

    this.challengeService.editChallenge(id, data).subscribe({
      next: (res) => {
        this.challenge = res
        setTimeout(() => this.loader = false, 500) // Loader delay to test it
        this.renderChallenge()
      }
    })
  }

  renderChallenge(): void{
    const challengeId = this.router.snapshot.params.id
    this.challengeService.viewChallenge(challengeId).subscribe({
      next: (res) => {
        this.challenge = res
        this.isAuthor = this.userService.currentUser._id === this.challenge.author._id
        this.loader = false
      }
    })
  }

  ngOnInit(): void {
    this.renderChallenge()
  }

}
