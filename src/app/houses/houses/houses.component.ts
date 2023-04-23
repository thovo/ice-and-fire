import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'src/app/shared/models/house';
import { HousesService } from 'src/app/shared/services/houses.service';
import { HousesDataSource } from './houses-datasource';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses$!: Observable<House[]>;
  dataSource!: HousesDataSource;
  displayedColumns = ['url', 'name', 'region', 'coatOfArms', 'words', 'title', 'currentLord', 'heir', 'overlord', 'ancestralWeapons'];

  constructor(private housesService: HousesService) { }

  ngOnInit(): void {
    this.dataSource = new HousesDataSource(this.housesService);
    this.dataSource.loadHouses()
  }

}
