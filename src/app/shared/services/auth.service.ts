import { Injectable } from '@angular/core';
import { addDays, addYears } from 'date-fns';
import { Observable, of } from 'rxjs';
import { UserLogin } from 'src/app/auth/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(userLogin: UserLogin): Observable<{ username: string, isAuthenticated: boolean }> {
    localStorage.setItem('username', `${userLogin.username}`);
    const date = new Date();
    if (userLogin.rememberUser) {
      localStorage.setItem('userExpire', addYears(date, 1).toDateString());
    } else {
      localStorage.setItem('userExpire', addDays(date, 1).toDateString());
    }
    // Whatever username, password, allow login
    return of({ username: `${userLogin.username}`, isAuthenticated: true });
  }
}
