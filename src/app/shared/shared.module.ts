import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { ContentPaginationComponent } from './components/content-pagination/content-pagination.component';
import { LoginComponent } from './components/login/login.component';
import { BooksService } from './services/books.service';
import { HttpClientModule } from '@angular/common/http';
import { CharactersService } from './services/characters.service';
import { GetIdPipe } from './pipes/get-id.pipe';

@NgModule({
    declarations: [
        PageTitleComponent,
        ContentPaginationComponent,
        LoginComponent,
        GetIdPipe,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        LoginComponent,
        PageTitleComponent,
        ContentPaginationComponent,
        GetIdPipe
    ],
    providers: [
        BooksService,
        CharactersService
    ]
})
export class SharedModule { }
