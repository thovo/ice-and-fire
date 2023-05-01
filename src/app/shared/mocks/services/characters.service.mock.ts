import { Character, CharactersFilterConfig } from '@models/character';
import { Observable, of } from 'rxjs';

export class CharactersServiceMock {
  getCharacters(
    pageIndex = 1,
    pageSize = 10,
    filterConfig: CharactersFilterConfig
  ): Observable<Character[]> {
    return of([]);
  }

  getCharacter(id: string): Observable<Character> {
    return of({} as Character);
  }
}
