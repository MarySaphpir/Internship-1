import {Injectable} from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class WikipediaSearchService {

  constructor(private http: HttpClient) {
  }

  setParams(term: string): string {
    return `action=opensearch&
      search=${term}&
      format=json&
      callback=JSONP_CALLBACK`;
  }

  search(term: string){
    const search = this.setParams(term);
    return this.http
      .get(`https://en.wikipedia.org/w/api.php?&action=opensearch&search=${term}&format=json&callback=__ng_jsonp__.__req0.finished1`,
        {headers: new HttpHeaders().set('Allow-Control-Allow-Origin', 'http://localhost:4200/')})
  }
}
