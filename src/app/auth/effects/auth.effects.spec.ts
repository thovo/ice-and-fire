import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AuthEffects } from './auth.effects';
import { AuthService } from '@shared/services/auth.service';
import { AuthServiceMock } from '@shared/mocks/services/auth.service.mock';

describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthEffects;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),
        {
          provide: AuthService,
          useClass: AuthServiceMock,
        },
      ],
    });

    effects = TestBed.inject(AuthEffects);
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
