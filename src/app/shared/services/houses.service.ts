import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { House, HousesFilterConfig } from '@models/house';
import { Observable } from 'rxjs';
import { API_URL } from '@constants/api.constant';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  url = API_URL + 'houses';

  constructor(private httpClient: HttpClient) { }

  getHouses(pageIndex = 1, pageSize = 10, filterConfig: HousesFilterConfig): Observable<House[]> {
    let params = new HttpParams()
      .set('pageSize', pageSize)
      .set('page', pageIndex);

    const filterList = ['name', 'region', 'words', 'hasWords', 'hasTitles', 'hasSeats', 'hasDiedOut', 'hasAncestralWeapons'];
    filterList.forEach(f => {
      const filterValue = filterConfig[f as keyof HousesFilterConfig];
      if (filterValue !== undefined && filterValue !== '' && filterValue !== null) {
        params = params.append(f, filterValue!);
      }
    });
    return this.httpClient.get<House[]>(this.url + '?' + params.toString());
  }

  getHouse(id: string): Observable<House> {
    return this.httpClient.get<House>(this.url + `/${id}`);
  }
}
