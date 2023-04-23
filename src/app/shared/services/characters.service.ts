import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url = 'https://anapioficeandfire.com/api/characters/';

  constructor(private httpClient: HttpClient) { }

  getCharacters(page = 1, pageSize = 10): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.url, {
      params: new HttpParams()
        .set('page', page.toString())
        .set('pageSize', pageSize.toString())
    });
  }
}
