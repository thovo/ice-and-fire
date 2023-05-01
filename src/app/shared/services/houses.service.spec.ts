import { TestBed } from '@angular/core/testing';

import { HousesService } from './houses.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HousesService', () => {
  let service: HousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
