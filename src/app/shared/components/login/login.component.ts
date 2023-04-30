import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl<string>('', { nonNullable: true }),
    password: new FormControl<string>('', { nonNullable: true })
  });

  login(): void {
    console.log(this.loginForm.value);
  }
}
