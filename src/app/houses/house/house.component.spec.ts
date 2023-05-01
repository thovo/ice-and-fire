import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseComponent } from './house.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HousesService } from '@shared/services/houses.service';
import { HousesServiceMock } from '@shared/mocks/services/houses.service.mock';
import { MatCardModule } from '@angular/material/card';
import { GetIdPipe } from '@shared/pipes/get-id.pipe';

describe('HouseComponent', () => {
  let component: HouseComponent;
  let fixture: ComponentFixture<HouseComponent>;
  let housesService: HousesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseComponent, GetIdPipe],
      imports: [RouterTestingModule, MatCardModule],
      providers: [
        {
          provide: HousesService,
          useClass: HousesServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HouseComponent);
    component = fixture.componentInstance;
    housesService = TestBed.inject(HousesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
