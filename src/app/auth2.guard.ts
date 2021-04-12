import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivateChild {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!!localStorage.getItem('token')) {
        return true;
      } else {
        return this.router.createUrlTree(['/login'], {
          queryParams: {
            returnUrl: state.url
          }
        });
      }
  }

}
