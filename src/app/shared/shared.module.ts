import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ContentPaginationComponent } from './components/content-pagination/content-pagination.component';


@NgModule({
    declarations: [
        PageTitleComponent,
        ContentPaginationComponent,
    ],
    imports: [
        CommonModule,
    ]
})
export class SharedModule { }
