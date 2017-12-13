import {WikipediaSearchService} from './wikipedia-search.service'
import {JsonpMock} from './mockJsonp';
import {Jsonp} from '@angular/http';

describe('Service: Search', () => {
  let wikiService: WikipediaSearchService;
  let jsonpMock = new JsonpMock();

  beforeEach(() => {
    wikiService = new WikipediaSearchService(<any>jsonpMock);
  });
});
