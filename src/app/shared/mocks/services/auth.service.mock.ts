import { Observable, of } from 'rxjs';
import { UserLogin } from 'src/app/auth/actions/auth.actions';

export class AuthServiceMock {
  login(
    userLogin: UserLogin
  ): Observable<{ username: string; isAuthenticated: boolean }> {
    // Whatever username, password, allow login
    return of({ username: '', isAuthenticated: false });
  }
}
