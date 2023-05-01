import { Component, OnInit } from '@angular/core';
import { CharactersService } from '@services/characters.service';
import { CharactersDataSource } from './characters-datasource';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Character, CharactersFilterConfig } from '@shared/models/character';
import { FormGroup, FormControl } from '@angular/forms';
import { CellRenderConfig } from '@shared/components/content-pagination/content-pagination.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters$!: Observable<Character[]>;
  dataSource!: CharactersDataSource;
  displayedColumns = [
    'url',
    'name',
    'gender',
    'culture',
    'born',
    'died',
    'titles',
    'aliases',
    'father',
    'mother',
    'spouse',
    'allegiances',
    'books',
    'povBooks',
    'tvSeries',
    'playedBy',
  ];
  configs: Record<string, CellRenderConfig> = {
    url: {
      matHeaderCellDef: 'ID',
      getIdValue: 'characters/',
      isSticky: true,
    },
    name: {
      matHeaderCellDef: 'Name',
    },
    gender: {
      matHeaderCellDef: 'Gender',
    },
    culture: {
      matHeaderCellDef: 'Culture',
    },
    born: {
      matHeaderCellDef: 'Born',
    },
    died: {
      matHeaderCellDef: 'Died',
    },
    titles: {
      matHeaderCellDef: 'Titles',
      isList: true,
    },
    aliases: {
      matHeaderCellDef: 'Aliases',
      isList: true,
    },
    father: {
      matHeaderCellDef: 'Father',
      getIdValue: 'characters/',
    },
    mother: {
      matHeaderCellDef: 'Mother',
      getIdValue: 'characters/',
    },
    spouse: {
      matHeaderCellDef: 'Spouse',
      getIdValue: 'characters/',
    },
    allegiances: {
      matHeaderCellDef: 'Allegiances',
      isList: true,
      getIdValue: 'houses/',
    },
    books: {
      matHeaderCellDef: 'Books',
      isList: true,
      getIdValue: 'books/',
    },
    povBooks: {
      matHeaderCellDef: 'POV Books',
      isList: true,
      getIdValue: 'books/',
    },
    tvSeries: {
      matHeaderCellDef: 'TV Series',
      isList: true,
    },
    playedBy: {
      matHeaderCellDef: 'Played by',
    },
  };
  filterForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    gender: new FormControl<string>('', { nonNullable: true }),
    culture: new FormControl<string>('', { nonNullable: true }),
    born: new FormControl<string>('', { nonNullable: true }),
    died: new FormControl<string>('', { nonNullable: true }),
    isAlive: new FormControl<boolean | null>(null),
  });
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [10, 15];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.dataSource = new CharactersDataSource(this.charactersService);
    this.getCharacters();
  }

  getCharacters(): void {
    const { name, gender, culture, born, died, isAlive } =
      this.filterForm.value;
    const filterConfig: CharactersFilterConfig = {
      name,
      gender,
      culture,
      born,
      died,
      isAlive,
    };
    this.dataSource.loadCharacters(this.pageIndex, this.pageSize, filterConfig);
  }

  handlePageEventChange(event: PageEvent): void {
    const { pageSize, pageIndex } = event;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex + 1; // Angular Material Paginator is zero-based index, API is 1-based index
    this.getCharacters();
  }
}
