export interface AuthState {
    isAuthenticated: boolean;
    username: string;
    loginError?: string;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    username: '',
    loginError: ''
};