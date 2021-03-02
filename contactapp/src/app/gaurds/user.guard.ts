import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from '../services/contact.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private service: ContactService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.service.isLoggedIn(localStorage.getItem('token')).pipe(map((data: any) => {
        console.log(data.isAuthenticated);
        if (data.isAuthenticated) {
          return true;
        }
        this.router.navigateByUrl('/login');
        return false;
      })
      );
  }

}
