import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { BooksComponent } from './components/books/books.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { SearchComponent } from './components/search/search.component';
//import {BookGuard} from './guards/book.guard';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'adminPanel', component: NewBookComponent},
  {path: 'books', component: BooksComponent},
  {path: 'book/:id', component:BookComponent},
  {path: 'search/:searchString', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
