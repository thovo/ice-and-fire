import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterComponent } from './character.component';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';
import { CharactersService } from '@shared/services/characters.service';
import { CharactersServiceMock } from '@shared/mocks/services/characters.service.mock';
import { GetIdPipe } from '@shared/pipes/get-id.pipe';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;
  let charactersService: CharactersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharacterComponent, GetIdPipe],
      imports: [RouterTestingModule, MatCardModule],
      providers: [
        {
          provide: CharactersService,
          useClass: CharactersServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    charactersService = TestBed.inject(CharactersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
