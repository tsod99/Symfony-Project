import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8000/api/';

export interface Book {
  id: Number,
  title: String,
  author: String,
  description: String,
  review: String
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private httpClient: HttpClient) { }
  
  public sendGetRequest() {
    return this.httpClient.get(API_URL + 'topHeadlines');
  }
  public getBookById(id: number) {
    return this.httpClient.get(API_URL + `book/${id}`);
  }
  public getBookByTitle(title: string): Observable<Book> {
    return this.httpClient.get<Book>(API_URL+ `search/${title}`)
  }
  public postBook(book:any): Observable<Book> {
    return this.httpClient.post<Book>(API_URL + 'addBook', book);
  }
  public deleteBook(id: number) {
    return this.httpClient.delete(API_URL + `delete/${id}`);
  }
}