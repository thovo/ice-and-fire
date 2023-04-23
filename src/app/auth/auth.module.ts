import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthEffects } from './effects/auth.effects';
import { authReducer } from './reducers/auth.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: []
})
export class AuthModule { }