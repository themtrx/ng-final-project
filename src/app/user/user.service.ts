import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(data: Object): Observable<any> {
    return this.http.post('http://localhost:9999/api/user/login', data, {withCredentials: true})
  }
}
