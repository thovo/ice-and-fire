import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
    Login = '[Auth] Login',
    LoginSuccess = '[Auth] Login success',
    LoginError = '[Auth] Login error'
}

export type UserLogin = {
    username: string | undefined;
    password: string | undefined;
    rememberUser: boolean | undefined;
};

export const AuthLogin = createAction(
    AuthActionTypes.Login,
    props<{ userLogin: UserLogin }>(),
);

export const AuthLoginSuccess = createAction(
    AuthActionTypes.LoginSuccess,
    props<{ username: string, isAuthenticated: boolean }>()
);

export const AuthLoginError = createAction(
    AuthActionTypes.LoginError,
    props<{ error: string }>()
);