import { DataSource } from '@angular/cdk/collections';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { Character } from '../../models/character';
import { House } from '../../models/house';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

export type CellRenderConfig = {
  matHeaderCellDef: string;
  getIdValue?: string;
  isList?: boolean;
  isDate?: boolean;
  isSticky?: boolean;
};

@Component({
  selector: 'app-content-pagination',
  templateUrl: './content-pagination.component.html',
  styleUrls: ['./content-pagination.component.scss']
})
export class ContentPaginationComponent {

  @Input() dataSource!: DataSource<Book | Character | House>;
  @Input() displayedColumns: string[] = [];
  @Input() configs!: Record<string, CellRenderConfig>;
  @Input() loading$!: Observable<boolean>;
  @Input() pagination = false;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 15];
  @Input() pageIndex = 0;
  @Input() dataLength = 10;
  @Output() page: EventEmitter<PageEvent> = new EventEmitter();


  emitPageEvent($event: PageEvent): void {
    this.page.emit($event);
  }

}
