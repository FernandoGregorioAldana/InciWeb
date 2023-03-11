/*import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate {
  
constructor(private userService: UserService, private router:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean {
      return this.userService.user$.pipe(
        take(1),
        map((user => user && this.userService.isRecursos(user) ? true: false)),
        tap((isRecursoshumanos) => {
          if (!isRecursoshumanos) {
            window.alert('Solo recursos Humanos entra a este sitio');
          }
        })
      )
    }
  }
*/