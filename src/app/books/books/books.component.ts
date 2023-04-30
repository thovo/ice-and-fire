import { Component, OnInit } from '@angular/core';
import { BooksService } from '@services/books.service';
import { BooksDataSource } from './books-datasource';
import { CellRenderConfig } from '@components/content-pagination/content-pagination.component';
import { FormGroup, FormControl } from '@angular/forms';
import { convertToSupportDate } from '@utils/date.utils';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  dataSource!: BooksDataSource;
  displayedColumns = ['url', 'name', 'isbn', 'numberOfPages', 'publisher', 'mediaType', 'authors', 'released'];
  configs: Record<string, CellRenderConfig> = {
    'url': {
      matHeaderCellDef: 'ID',
      getIdValue: 'books/',
      isSticky: true
    },
    'name': {
      matHeaderCellDef: 'Name'
    },
    'isbn': {
      matHeaderCellDef: 'ISBN'
    },
    'numberOfPages': {
      matHeaderCellDef: 'Number of pages'
    },
    'publisher': {
      matHeaderCellDef: 'Publisher'
    },
    'mediaType': {
      matHeaderCellDef: 'MediaType'
    },
    'authors': {
      matHeaderCellDef: 'Authors'
    },
    'released': {
      matHeaderCellDef: 'Released',
      isDate: true
    },
  };
  filterForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    fromReleaseDate: new FormControl<string>('', { nonNullable: true }),
    toReleaseDate: new FormControl<string>('', { nonNullable: true })
  });
  pageSize = 10;
  pageIndex = 1;
  pageSizeOptions = [10, 15];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.dataSource = new BooksDataSource(this.booksService);
    this.getBooks();
  }

  getBooks(): void {
    const { name, fromReleaseDate, toReleaseDate } = this.filterForm.value;
    this.dataSource.loadBooks(this.pageSize, this.pageIndex, name, convertToSupportDate(fromReleaseDate), convertToSupportDate(toReleaseDate));
  }

  handlePageEventChange(event: PageEvent): void {
    const { pageSize, pageIndex } = event;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex + 1; // Angular Material Paginator is zero-based index, API is 1-based index
    this.getBooks();
  }

}
