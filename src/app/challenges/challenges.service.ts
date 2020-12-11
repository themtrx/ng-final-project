import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map,tap, catchError } from 'rxjs/operators'

import { IGetChallenge } from '../interfaces/getChallenge'
import { UserService } from '../user/user.service';

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

    getAllChallenges(){
      return this.http.get(`http://localhost:9999/api/activity`)
    }

    getMyChallenges(userId: string): Observable<any>{
      return this.http.get(`http://localhost:9999/api/user/${userId}`)
    }

    viewChallenge(id: number): Observable<any> {
      return this.http.get(`http://localhost:9999/api/activity/${id}`)
    }

    addChallenge(data: Object): Observable<any> {
      return this.http.post('http://localhost:9999/api/activity/', data , {withCredentials: true })
    }
}
