import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthLogin, UserLogin } from 'src/app/auth/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl<string>('', { nonNullable: true }),
    password: new FormControl<string>('', { nonNullable: true }),
    rememberUser: new FormControl<boolean>(false, { nonNullable: true }),
  });

  constructor(private store: Store) {}

  login(): void {
    const { username, password, rememberUser } = this.loginForm.value;
    const userLogin: UserLogin = {
      username,
      password,
      rememberUser,
    };
    this.store.dispatch(AuthLogin({ userLogin }));
  }
}
