import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { House, HousesFilterConfig } from '@models/house';
import { HousesService } from '@services/houses.service';
import { HousesDataSource } from './houses-datasource';
import { FormGroup, FormControl } from '@angular/forms';
import { CellRenderConfig } from '@components/content-pagination/content-pagination.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit {

  houses$!: Observable<House[]>;
  dataSource!: HousesDataSource;
  displayedColumns = ['url', 'name', 'region', 'coatOfArms', 'words', 'titles', 'currentLord', 'heir', 'overlord', 'ancestralWeapons', 'seats'];
  configs: Record<string, CellRenderConfig> = {
    'url': {
      matHeaderCellDef: 'ID',
      getIdValue: 'houses/',
      isSticky: true
    },
    'name': {
      matHeaderCellDef: 'Name'
    },
    'region': {
      matHeaderCellDef: 'Region'
    },
    'coatOfArms': {
      matHeaderCellDef: 'Coat of arms'
    },
    'words': {
      matHeaderCellDef: 'Words'
    },
    'titles': {
      matHeaderCellDef: 'Titles'
    },
    'currentLord': {
      matHeaderCellDef: 'Current lord',
      getIdValue: 'characters/'
    },
    'heir': {
      matHeaderCellDef: 'Heir',
      getIdValue: 'characters/'
    },
    'overlord': {
      matHeaderCellDef: 'Overlord',
      getIdValue: 'houses/'
    },
    'ancestralWeapons': {
      matHeaderCellDef: 'Ancestral weapons'
    },
    'seats': {
      matHeaderCellDef: 'Seats'
    },

  };
  filterForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    region: new FormControl<string>('', { nonNullable: true }),
    words: new FormControl<string>('', { nonNullable: true }),
    hasWords: new FormControl<boolean | null>(null),
    hasTitles: new FormControl<boolean | null>(null),
    hasSeats: new FormControl<boolean | null>(null),
    hasDiedOut: new FormControl<boolean | null>(null),
    hasAncestralWeapons: new FormControl<boolean | null>(null)
  });
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [10, 15];

  constructor(private housesService: HousesService) { }

  ngOnInit(): void {
    this.dataSource = new HousesDataSource(this.housesService);
    this.getHouses();
  }

  getHouses(): void {
    const { name, region, words, hasWords, hasTitles, hasSeats, hasDiedOut, hasAncestralWeapons } = this.filterForm.value;
    const filterConfig: HousesFilterConfig = { name, region, words, hasWords, hasTitles, hasSeats, hasDiedOut, hasAncestralWeapons };
    this.dataSource.loadHouses(this.pageIndex, this.pageSize, filterConfig);
  }

  handlePageEventChange(event: PageEvent): void {
    const { pageSize, pageIndex } = event;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex + 1; // Angular Material Paginator is zero-based index, API is 1-based index
    this.getHouses();
  }

}
