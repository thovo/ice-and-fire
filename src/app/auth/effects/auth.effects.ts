import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AuthLogin, AuthLoginError, AuthLoginSuccess } from '../actions/auth.actions';
import { AuthService } from '@shared/services/auth.service';



@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthLogin),
      switchMap((action) =>
        this.authService.login(action.userLogin).pipe(
          map(({ username, isAuthenticated }) => AuthLoginSuccess({ username, isAuthenticated })),
          catchError((error) => of(AuthLoginError({ error })))
        )
      ),
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) { }
}
