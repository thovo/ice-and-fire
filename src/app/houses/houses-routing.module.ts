import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { HouseComponent } from './house/house.component';

const routes: Routes = [
  {
    path: '', component: HousesComponent,
    children: [
      { path: ':id', component: HouseComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
