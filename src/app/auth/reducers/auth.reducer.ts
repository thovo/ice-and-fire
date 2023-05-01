import { createReducer, on } from '@ngrx/store';
import { AuthLoginError, AuthLoginSuccess } from '../actions/auth.actions';
import { initialState } from '../auth.state';


export const authReducer = createReducer(
    initialState,
    on(AuthLoginSuccess, (state, { username, isAuthenticated }) => {
        return {
            ...state,
            username,
            isAuthenticated
        };
    }),
    on(AuthLoginError, (state, { error }) => {
        return {
            ...state,
            loginError: error,
            username: ''
        };
    }),
);