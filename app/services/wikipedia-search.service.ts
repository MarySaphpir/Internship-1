import {Injectable} from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class WikipediaSearchService {

  constructor(private jsonp: Jsonp) {
  }

  setParams(term: string): URLSearchParams {
    const search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    search.set('callback', 'JSONP_CALLBACK');
    return search;
  }

  search(term: string): Observable<string[]> {
    const search = this.setParams(term);
    return this.jsonp
      .get('http://en.wikipedia.org/w/api.php?', {search})
      .map((request) => request.json()[1]);
  }
}
