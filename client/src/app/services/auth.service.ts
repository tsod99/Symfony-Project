import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://127.0.0.1:8000/api/login_check';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API , {
      email,
      password
    }, httpOptions);
  }

}