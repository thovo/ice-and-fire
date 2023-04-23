import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/models/book';
import { BooksService } from 'src/app/shared/services/books.service';
import { BooksDataSource } from './books-datasource';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  dataSource!: BooksDataSource;
  displayedColumns = ['url', 'name', 'isbn', 'numberOfPages', 'publisher', 'mediaType', 'authors', 'released'];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.dataSource = new BooksDataSource(this.booksService);
    this.dataSource.loadBooks()
  }

}
