import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    Login = '[Auth] Login'
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload: { email: string, password: string }) { }
}

export type AuthActions = Login;