import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Book } from '@models/book';
import { Observable } from 'rxjs';
import { API_URL } from '@constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  url = API_URL + 'books';

  constructor(private httpClient: HttpClient) { }

  getBooks(pageSize: number = 10, pageIndex: number = 1, name?: string | null, fromReleaseDate?: string | null, toReleaseDate?: string | null): Observable<Book[]> {
    let params = new HttpParams()
      .set('pageSize', pageSize)
      .set('page', pageIndex);
    if (name) {
      params = params.append('name', name);
    }
    if (fromReleaseDate) {
      params = params.append('fromReleaseDate', fromReleaseDate);
    }
    if (toReleaseDate) {
      params = params.append('toReleaseDate', toReleaseDate);
    }
    return this.httpClient.get<Book[]>(this.url + '?' + params.toString());
  }

  getBook(id: string): Observable<Book> {
    return this.httpClient.get<Book>(this.url + `/${id}`);
  }
}
