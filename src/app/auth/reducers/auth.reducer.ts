import { createReducer, Action } from '@ngrx/store';

import { AuthActions, AuthActionTypes } from '../actions/auth.actions';

export interface AuthState {
    isAuthenticated: boolean;
    user: { email: string, password: string } | null;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null
};

export const authReducer = createReducer(
    initialState,
    (state: AuthState, action: AuthActions) => {
        switch (action.type) {
            case AuthActionTypes.Login:
                return { ...state, isAuthenticated: true, user: { email: action.payload.email, password: action.payload.password } };
            default:
                return state;
        }
    }
);