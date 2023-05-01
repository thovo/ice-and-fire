import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', canActivate: [AuthGuard], loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: 'characters', canActivate: [AuthGuard], loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },
  { path: 'houses', canActivate: [AuthGuard], loadChildren: () => import('./houses/houses.module').then(m => m.HousesModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
