import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WikipediaSearchComponent} from './wikipedia-search.component';
import {WikipediaSearchService} from '../../services/wikipedia-search.service';
import {JsonpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    HttpClientModule,
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
