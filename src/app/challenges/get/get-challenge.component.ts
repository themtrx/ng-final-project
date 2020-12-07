import { Component, Input, OnInit } from '@angular/core';
import { IGetChallenge } from 'src/app/interfaces/getChallenge';
import { ChallengesService } from '../challenges.service';

@Component({
  selector: 'app-get-challenge',
  templateUrl: './get-challenge.component.html',
  styleUrls: ['./get-challenge.component.css']
})
export class GetChallengeComponent implements OnInit {

  @Input() challenge: IGetChallenge
  loader: boolean

  constructor(public challengeService: ChallengesService) {
    //If not like that it will give error cause is different then interface
    //If not deaclear this.challenge will throw error in console but still render
    this.challenge = Object.create(null)
    this.loader = true
   }

   renderChallenge(): void {
    this.loader = true
    this.challengeService.getNewChallenge().subscribe(challenge => {
      this.challenge = challenge
      let keyWord = this.challengeService.getKeyWord(challenge.activity)

      this.challengeService.getRandomImage(keyWord).subscribe((firstRes: any) => {
        if(firstRes.total_pages<= 10) {
          keyWord = this.challengeService.getKeyWord(challenge.type)
        }

        let randomNum = this.challengeService.getRandomNumber(firstRes.total_pages)

        this.challengeService.getRandomImage(keyWord, randomNum).subscribe((secondRes: any) => {
          const resultLen = secondRes.results.length
          const getRandomObj = secondRes.results[this.challengeService.getRandomNumber(resultLen)]

          this.challenge.img = getRandomObj.urls.regular
        })
        this.loader = false
      })
    })
    
   }

  ngOnInit(): void {
    this.renderChallenge()
  }

}
