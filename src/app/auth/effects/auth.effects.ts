import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { Login, AuthActionTypes } from '../actions/auth.actions';



@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType<Login>(AuthActionTypes.Login),
      tap(action => console.log(action))
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) { }
}
