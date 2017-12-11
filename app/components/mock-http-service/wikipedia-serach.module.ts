import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WikipediaSearchComponent} from './wikipedia-search/wikipedia-search.component';
import {WikipediaSearchService} from './wikipedia-search.service';
import {JsonpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  declarations: [
    WikipediaSearchComponent
  ],
  providers: [
    WikipediaSearchService
  ]
})
export class WikipediaSerachModule {
}
