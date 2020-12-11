import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGetChallenge } from 'src/app/interfaces/getChallenge';
import { ChallengesService } from '../challenges.service';

@Component({
  selector: 'app-get-challenge',
  templateUrl: './get-challenge.component.html',
  styleUrls: ['./get-challenge.component.css']
})
export class GetChallengeComponent implements OnInit {

  @Input() challenge: any
  loader: boolean
  errorMessage: {
    error: boolean;
    msg: string;
  }

  constructor(
    public challengeService: ChallengesService,
    private router: Router
    ) {
    //If not like that it will give error cause is different then interface
    //If not deaclear this.challenge will throw error in console but still render
    this.challenge = Object.create(null)
    this.loader = true
    this.errorMessage = {error: false, msg: 'There is no picture to load'}
   }

   addNewChallenge(): void {
     this.challengeService.addChallenge(this.challenge).subscribe({
       next: (res) => {
         const challengeId = res._id
         this.router.navigate([`/challenges/view/${challengeId}`])
       },
       error: (res) => {
         console.log(res)
       }
     })
   }

   renderChallenge(): void {
    this.loader = true
    this.errorMessage.error = false

    this.challengeService.getNewChallenge().subscribe(challenge => {
      this.challenge = null
      this.challenge = challenge
      let keyWord = this.challengeService.getKeyWord(challenge.activity)

      this.challengeService.getRandomImage(keyWord).subscribe((firstRes: any) => {
        if(firstRes.total_pages<= 10) {
          keyWord = this.challengeService.getKeyWord(challenge.type)
        }

        let randomNum = this.challengeService.getRandomNumber(firstRes.total_pages)

        this.challengeService.getRandomImage(keyWord, randomNum)
        .subscribe(
          (secondRes: any) => {

            const resultLen = secondRes.results.length
            const getRandomObj = secondRes.results[this.challengeService.getRandomNumber(resultLen)]

            this.challenge.img = getRandomObj.urls.regular
            this.loader = false
          },
          (err: any) => {
            this.loader = false
            this.errorMessage.error = true
          }
      );

      })
    })
    
   }

  ngOnInit(): void {
    this.renderChallenge()
  }

}
