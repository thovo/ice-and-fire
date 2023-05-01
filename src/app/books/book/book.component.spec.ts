import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { BooksService } from '@shared/services/books.service';
import { BooksServiceMock } from '@shared/mocks/services/books.service.mock';
import { CdkAccordionModule } from '@angular/cdk/accordion';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let booksService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookComponent],
      imports: [RouterTestingModule, MatCardModule, CdkAccordionModule],
      providers: [
        {
          provide: BooksService,
          useClass: BooksServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    booksService = TestBed.inject(BooksService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
