import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app-component/app.component';
import {TodoService} from './services/todo.service';
import {AppComponentModule} from './components/app-component/app.module';

@NgModule({
  imports: [
    BrowserModule,
    AppComponentModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
