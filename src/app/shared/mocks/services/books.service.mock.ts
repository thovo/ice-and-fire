import { Book } from '@shared/models/book';
import { Observable, of } from 'rxjs';

export class BooksServiceMock {
  getBooks(
    pageSize: number = 10,
    pageIndex: number = 1,
    name?: string | null,
    fromReleaseDate?: string | null,
    toReleaseDate?: string | null
  ): Observable<Book[]> {
    return of([]);
  }

  getBook(id: string): Observable<Book> {
    return of({} as Book);
  }
}
