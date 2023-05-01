import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPaginationComponent } from './content-pagination.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

describe('ContentPaginationComponent', () => {
  let component: ContentPaginationComponent;
  let fixture: ComponentFixture<ContentPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentPaginationComponent],
      imports: [MatTableModule, MatPaginatorModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
