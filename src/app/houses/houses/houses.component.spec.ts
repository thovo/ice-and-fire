import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesComponent } from './houses.component';
import { MatTableModule } from '@angular/material/table';
import { HousesService } from '@shared/services/houses.service';
import { HousesServiceMock } from '@shared/mocks/services/houses.service.mock';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ContentPaginationComponent } from '@shared/components/content-pagination/content-pagination.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
describe('HousesComponent', () => {
  let component: HousesComponent;
  let fixture: ComponentFixture<HousesComponent>;
  let housesService: HousesService;
  let filterForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    region: new FormControl<string>('', { nonNullable: true }),
    words: new FormControl<string>('', { nonNullable: true }),
    hasWords: new FormControl<boolean | null>(null),
    hasTitles: new FormControl<boolean | null>(null),
    hasSeats: new FormControl<boolean | null>(null),
    hasDiedOut: new FormControl<boolean | null>(null),
    hasAncestralWeapons: new FormControl<boolean | null>(null),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HousesComponent, ContentPaginationComponent],
      providers: [
        {
          provide: HousesService,
          useClass: HousesServiceMock,
        },
      ],
      imports: [
        MatTableModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatPaginatorModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HousesComponent);
    component = fixture.componentInstance;
    housesService = TestBed.inject(HousesService);
    component.filterForm = filterForm;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
