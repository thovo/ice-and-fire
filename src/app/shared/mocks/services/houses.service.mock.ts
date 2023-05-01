import { House, HousesFilterConfig } from '@models/house';
import { Observable, of } from 'rxjs';

export class HousesServiceMock {
  getHouses(
    pageIndex = 1,
    pageSize = 10,
    filterConfig: HousesFilterConfig
  ): Observable<House[]> {
    return of([]);
  }

  getHouse(id: string): Observable<House> {
    return of({} as House);
  }
}
