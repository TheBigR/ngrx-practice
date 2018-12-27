import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import {FormsModule} from '@angular/forms';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoListItemComponent } from './components/todo/todo-list-item/todo-list-item.component';
import * as TodoReducer from './store/todo/todo.reducer';
import {StoreModule} from '@ngrx/store';
import { TodoDetailsComponent } from './components/todo/todo-details/todo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    StoreModule.forRoot({todos: TodoReducer.TodoReducer}),
    EffectsModule.forRoot([TodoEffects])
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
