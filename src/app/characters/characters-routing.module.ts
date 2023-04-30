import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
  {
    path: '', component: CharactersComponent,
  },
  { path: ':id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
