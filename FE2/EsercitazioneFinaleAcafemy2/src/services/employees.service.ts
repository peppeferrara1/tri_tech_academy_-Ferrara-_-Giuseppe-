import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../inteface/employees.interface';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private apiUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.apiUrl);
  }

  //Sistemare add
  addEmployees(employees: Employees): Observable<Employees> {
    return this.http.post<Employees>(this.apiUrl, employees);
  }

  //Sistemare add
  updateEmployees(employees: Employees): Observable<Employees> {
    return this.http.put<Employees>(`${this.apiUrl}/${employees.idEmployee}`, employees);
  }

  deleteEmployees(id: number): Observable<void> {
    let params = new HttpParams().set('id', id);
    return this.http.delete<void>(this.apiUrl, { params: params });
  }

  

  
}