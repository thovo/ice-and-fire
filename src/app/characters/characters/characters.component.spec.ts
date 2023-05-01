import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersComponent } from './characters.component';
import { CharactersService } from '@shared/services/characters.service';
import { CharactersServiceMock } from '@shared/mocks/services/characters.service.mock';
import { MatTableModule } from '@angular/material/table';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContentPaginationComponent } from '@shared/components/content-pagination/content-pagination.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let charactersService: CharactersService;
  let filterForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    gender: new FormControl<string>('', { nonNullable: true }),
    culture: new FormControl<string>('', { nonNullable: true }),
    born: new FormControl<string>('', { nonNullable: true }),
    died: new FormControl<string>('', { nonNullable: true }),
    isAlive: new FormControl<boolean | null>(null),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersComponent, ContentPaginationComponent],
      providers: [
        {
          provide: CharactersService,
          useClass: CharactersServiceMock,
        },
      ],
      imports: [
        MatTableModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        NoopAnimationsModule,
        MatPaginatorModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    charactersService = TestBed.inject(CharactersService);
    component.filterForm = filterForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
