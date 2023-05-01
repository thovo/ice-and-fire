import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksComponent } from './books.component';
import { MatTableModule } from '@angular/material/table';
import { BooksServiceMock } from '@shared/mocks/services/books.service.mock';
import { BooksService } from '@shared/services/books.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContentPaginationComponent } from '@shared/components/content-pagination/content-pagination.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('BooksComponent', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  let booksService: BooksService;
  const filterForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    fromReleaseDate: new FormControl<string>('', { nonNullable: true }),
    toReleaseDate: new FormControl<string>('', { nonNullable: true }),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksComponent, ContentPaginationComponent],
      imports: [
        MatTableModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatPaginatorModule,
      ],
      providers: [
        {
          provide: BooksService,
          useClass: BooksServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    booksService = TestBed.inject(BooksService);
    component.filterForm = filterForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
