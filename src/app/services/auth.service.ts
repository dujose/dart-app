import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UserViewModel } from '../shared/view-models/user.view-model';
import { IUser } from '../interfaces/Iuser';

const apiUrlogin = environment.BASE_URL_LOGIN;

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   constructor(
      private httpClient: HttpClient,
      private router: Router) { }

   logIn(user: IUser): Observable<any> {

      return this.httpClient.post<any>(apiUrlogin, user).pipe(
         tap((res) => {
            if (!res) return;

            localStorage.setItem('token', btoa(JSON.stringify(res['token'])));
            localStorage.setItem('user', JSON.stringify(new UserViewModel(res)));
            this.router.navigate(['']);
            
         }));
   }

   logOut() {
      localStorage.clear();
      this.router.navigate(['login']);
   }

   getLoggedUser() {
      return localStorage.getItem('user');
   }

   get isLogged(): any {
      return localStorage.getItem('token') ? true : false;
   }




}