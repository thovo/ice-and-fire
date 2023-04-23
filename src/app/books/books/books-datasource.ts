import { DataSource, CollectionViewer } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, catchError, of, finalize } from "rxjs";
import { Book } from "src/app/shared/models/book";
import { BooksService } from "src/app/shared/services/books.service";

export class BooksDataSource implements DataSource<Book> {

    private booksSubject = new BehaviorSubject<Book[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private booksService: BooksService) { }

    connect(collectionViewer: CollectionViewer): Observable<Book[]> {
        return this.booksSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.booksSubject.complete();
        this.loadingSubject.complete();
    }

    loadBooks(filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {

        this.loadingSubject.next(true);

        this.booksService.getBooks().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(books => this.booksSubject.next(books));
    }
}