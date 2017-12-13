import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class JsonpMock {
  private callbackData = ['A', 'Association football', 'Australia',
                          'Animal', 'Automation', 'Arthropod',
                          'Africa', 'Austria', 'American Civil War',
                          'Anthony Eden'];

  get(){
    return Observable.of(this.callbackData)
  }
}
