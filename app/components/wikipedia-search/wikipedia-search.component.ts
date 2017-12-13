import {Component, OnInit} from '@angular/core';
import {WikipediaSearchService} from '../../services/wikipedia-search.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
})
export class WikipediaSearchComponent implements OnInit {
  items: Observable<Object>;
  term = new FormControl();
  title = 'property for test';

  constructor(private wikipediaService: WikipediaSearchService) {
  }

  ngOnInit() {
    this.items =  this.wikipediaService.search('A');
    console.log(this.items)
  }
}
