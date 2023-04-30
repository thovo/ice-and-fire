import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, CharactersFilterConfig } from '@models/character';
import { Observable } from 'rxjs';
import { API_URL } from '@constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  url = API_URL + 'characters';

  constructor(private httpClient: HttpClient) { }

  getCharacters(pageIndex = 1, pageSize = 10, filterConfig: CharactersFilterConfig): Observable<Character[]> {
    let params = new HttpParams()
      .set('pageSize', pageSize)
      .set('page', pageIndex);

    const filterList = ['name', 'gender', 'culture', 'born', 'died', 'isAlive'];
    filterList.forEach(f => {
      const filterValue = filterConfig[f as keyof CharactersFilterConfig];
      if (filterValue !== undefined && filterValue !== '' && filterValue !== null) {
        params = params.append(f, filterValue!);
      }
    });

    return this.httpClient.get<Character[]>(this.url + '?' + params.toString());
  }

  getCharacter(id: string): Observable<Character> {
    return this.httpClient.get<Character>(this.url + `/${id}`);
  }
}
