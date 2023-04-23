import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, catchError, of, finalize } from "rxjs";
import { Character } from "src/app/shared/models/character";
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

    loadCharacters(page = 1, pageSize = 10) {
        this.loadingSubject.next(true);
        this.charactersService.getCharacters(page, pageSize).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(characters => this.charactersSubject.next(characters));
    }
}