import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { CharactersDataSource } from './characters-datasource';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, AfterViewInit {

  dataSource!: CharactersDataSource;
  displayedColumns = ['url', 'name', 'gender', 'culture', 'born', 'died', 'titles', 'aliases', 'father', 'mother', 'spouse', 'allegiances',
    // 'books', 'povBooks', 'tvSeries', 
    'playedBy'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.dataSource = new CharactersDataSource(this.charactersService);
  }

  ngAfterViewInit(): void {
    this.dataSource.loadCharacters(
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
    this.paginator.page.pipe(
      tap(() => this.loadPage())
    ).subscribe();
  }

  loadPage(): void {
    this.dataSource.loadCharacters(
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }
}
