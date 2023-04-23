import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousesComponent } from './houses/houses.component';
import { HouseComponent } from './house/house.component';


@NgModule({
  declarations: [
    HousesComponent,
    HouseComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule
  ]
})
export class HousesModule { }
