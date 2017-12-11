import {NgModule} from '@angular/core';

import {AppComponent} from './components/app-component/app.component';
import {TodoService} from './services/todo.service';
import {AppComponentModule} from './modules/app-component.module';

@NgModule({
  imports: [
    AppComponentModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
  declarations: []
})
export class AppModule {
}
