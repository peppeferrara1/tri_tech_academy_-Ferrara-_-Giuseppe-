import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../inteface/employees.interface';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/login';
  loginIndex :boolean = false;

  constructor(private http: HttpClient) { }


  login(email: string): Observable<Employees> {
    let params = new HttpParams().set('email', email);
    return this.http.get<Employees>(this.apiUrl, { params: params });
  }
 
}