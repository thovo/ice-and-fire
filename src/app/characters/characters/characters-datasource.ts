import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, catchError, of, finalize, tap } from "rxjs";
import { Character, CharactersFilterConfig } from "src/app/shared/models/character";
import { CharactersService } from "src/app/shared/services/characters.service";

export class CharactersDataSource implements DataSource<Character> {

    private charactersSubject = new BehaviorSubject<Character[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private charactersService: CharactersService) { }

    connect(collectionViewer: CollectionViewer): Observable<Character[]> {
        return this.charactersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.charactersSubject.complete();
        this.loadingSubject.complete();
    }

    loadCharacters(pageIndex = 1, pageSize = 10, filterConfig: CharactersFilterConfig) {
        this.loadingSubject.next(true);
        this.charactersService.getCharacters(pageIndex, pageSize, filterConfig).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false)),
            tap(c => console.log(c))
        ).subscribe(characters => this.charactersSubject.next(characters));
    }
}