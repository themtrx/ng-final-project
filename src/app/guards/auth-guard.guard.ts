import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private router: Router,
    private userService: UserService
    ){ }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<any | null> ;

    if(this.userService.currentUser === undefined){
      stream$ = this.userService.getProfile()
    }else {
      stream$ = of(this.userService.currentUser)
    }

    return stream$.pipe(
      map((user) => {
        const needLogForRoute = childRoute.data.isLogged
        return typeof needLogForRoute !== 'boolean' || needLogForRoute === !!user
      }),
      tap((canContinue) => {
        if(canContinue){ return; }
        this.router.navigateByUrl(this.router.url)
      })
    )
  }

}
