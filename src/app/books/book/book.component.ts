import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, takeUntil, map, switchMap } from 'rxjs';
import { Book } from '@models/book';
import { BooksService } from '@services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit, OnDestroy {
  book$!: Observable<Book>;
  destroy$: Subject<boolean> = new Subject();

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    this.book$ = this.route.params.pipe(
      takeUntil(this.destroy$),
      map(params => params['id']),
      switchMap(id => this.booksService.getBook(id))
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
