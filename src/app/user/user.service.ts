import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get isLogged (): boolean {
    return !!this.currentUser
  }

  currentUser: any

  constructor(private http: HttpClient) { }

  register(data: Object): Observable<any> {
    return this.http.post('user/register', data).pipe(
      tap((user: any) => this.currentUser = user))
  }

  getProfile(): Observable<any> {
    return this.http.get('user/profile').pipe(
      tap(((username: any) => this.currentUser = username)),
      catchError(() => {this.currentUser =  null; return of(null)})
    )
  }

  login(data: Object): Observable<any> {
    return this.http.post('user/login', data).pipe(
      tap((user: any) => this.currentUser = user)
    )
  }

  logOut(): Observable<any>{
    return this.http.post('user/logout', {}).pipe(
      tap(() => this.currentUser = null)
    )
  }
}
