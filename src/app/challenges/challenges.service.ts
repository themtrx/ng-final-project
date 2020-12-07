import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,tap, catchError } from 'rxjs/operators'

import { IGetChallenge } from '../interfaces/getChallenge'

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {

  constructor(public http: HttpClient) { }

    getNewChallenge(): Observable<IGetChallenge>{
      return this.http.get<IGetChallenge>('https://www.boredapi.com/api/activity')
    }

    

    getKeyWord(sentence?: string, type?: string): any {

      if(sentence && sentence!== ''){
        return sentence.split(' ').join('-')

      }else if(type && type !== ''){

        if(type === 'busywork'){
          return type = 'busy-work'
        }else if (type === 'recreational'){
          return type = 'fun'
        }

      }

    }

    getRandomNumber(maxNumber: number) {
      return Math.floor(Math.random() * maxNumber)
    }
    
    getRandomImage(searchWord: string, randomPage?: number): any{

      if(!randomPage){
        randomPage = 1
      }

      return this.http.get(`https://api.unsplash.com/search/photos?page=${randomPage}&query=${searchWord}&client_id=ZDgXw5Xy3RNbAsqcq0_OQ_frLbWoglntBi8-tq8jyTw`)
    }
}
