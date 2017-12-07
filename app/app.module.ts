import {NgModule} from '@angular/core';

import {AppComponent} from './components/app-component/app.component';
import {TodoService} from './services/todo.service';
import {AppComponentModule} from './components/app-component/app-component.module';

@NgModule({
  imports: [
    AppComponentModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
