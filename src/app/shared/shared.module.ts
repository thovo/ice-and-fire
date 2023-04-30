import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from '@components/page-title/page-title.component';
import { ContentPaginationComponent } from '@components/content-pagination/content-pagination.component';
import { LoginComponent } from '@components/login/login.component';
import { BooksService } from '@services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { CharactersService } from '@services/characters.service';
import { GetIdPipe } from '@pipes/get-id.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MakeRouterLinkPipe } from '@pipes/make-router-link.pipe';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        PageTitleComponent,
        ContentPaginationComponent,
        LoginComponent,
        GetIdPipe,
        MakeRouterLinkPipe,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        RouterModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
    ],
    exports: [
        LoginComponent,
        PageTitleComponent,
        ContentPaginationComponent,
        GetIdPipe,
        MakeRouterLinkPipe
    ],
    providers: [
        BooksService,
        CharactersService
    ]
})
export class SharedModule { }
