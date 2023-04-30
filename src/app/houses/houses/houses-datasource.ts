import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, catchError, of, finalize } from "rxjs";
import { House, HousesFilterConfig } from "src/app/shared/models/house";
import { HousesService } from "src/app/shared/services/houses.service";

export class HousesDataSource implements DataSource<House> {

    private housesSubject = new BehaviorSubject<House[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private housesService: HousesService) { }

    connect(collectionViewer: CollectionViewer): Observable<House[]> {
        return this.housesSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.housesSubject.complete();
        this.loadingSubject.complete();
    }

    loadHouses(pageIndex = 1, pageSize = 10, filterConfig: HousesFilterConfig) {
        this.loadingSubject.next(true);
        this.housesService.getHouses(pageIndex, pageSize, filterConfig).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe(houses => this.housesSubject.next(houses));
    }
}