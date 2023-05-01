import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { LoginComponent } from '@shared/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<{ username: string; isAuthenticated: boolean }>;
  const initialState = { username: '', isAuthenticated: false };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, LoginComponent],
      providers: [provideMockStore({ initialState })],
      imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
