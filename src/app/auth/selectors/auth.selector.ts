import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../auth.state';

export const authFeature = createFeatureSelector<AuthState>('auth');

export const selectIsAuth = createSelector(
    authFeature,
    (state) => !!state.isAuthenticated
);

export const selectUsername = createSelector(
    authFeature,
    (state) => state.username
);
