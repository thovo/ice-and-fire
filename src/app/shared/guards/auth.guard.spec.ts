import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let store: MockStore<{ username: string; isAuthenticated: boolean }>;
  const initialState = { username: '', isAuthenticated: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });
    guard = TestBed.inject(AuthGuard);
    store = TestBed.get<Store>(Store);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
