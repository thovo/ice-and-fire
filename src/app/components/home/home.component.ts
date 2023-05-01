import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { differenceInSeconds } from 'date-fns';
import { Observable } from 'rxjs';
import { AuthLoginSuccess } from 'src/app/auth/actions/auth.actions';
import { selectIsAuth, selectUsername } from 'src/app/auth/selectors/auth.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isAuth$: Observable<boolean>;
  username$: Observable<string>;

  constructor(private store: Store) {
    this.checkUserAvailable();
    this.isAuth$ = this.store.select(selectIsAuth);
    this.username$ = this.store.select(selectUsername);
  }

  checkUserAvailable(): void {
    const username = localStorage.getItem('username');
    const userExpire = localStorage.getItem('userExpire');
    if (userExpire && username) {
      const isUserExpired = differenceInSeconds((new Date(`${userExpire}`)), new Date()) < 0;
      if (!isUserExpired) {
        this.store.dispatch(AuthLoginSuccess({ username, isAuthenticated: true }));
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('userExpire');
      }
    }
  }
}
