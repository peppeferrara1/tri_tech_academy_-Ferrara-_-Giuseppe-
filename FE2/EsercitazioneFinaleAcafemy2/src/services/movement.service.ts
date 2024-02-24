import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movement } from '../inteface/movement.interface';
import { ProductsService } from './products.service';



@Injectable({
  providedIn: 'root'
})
export class MovementService {
  private apiUrl = 'http://localhost:8080/movements';
  private baseUrl = 'http://localhost:8080/movementById';

  constructor(private http: HttpClient) { }

  getMovementByProductsId(id: number): Observable<Movement[]> {
    let params = new HttpParams().set('movementId', id);
    return this.http.get<Movement[]>(this.baseUrl, { params: params });
  }

  getMovement(): Observable<Movement[]> {
    return this.http.get<Movement[]>(this.apiUrl);
  }

  addMovement(movement: Movement): Observable<Movement> {
    return this.http.post<Movement>(this.apiUrl, movement);
  }

  updateMovement(movement: Movement): Observable<Movement> {
    return this.http.put<Movement>(`${this.apiUrl}/${movement.idMovement}`, movement);
  }

  deleteMovement(id: number): Observable<void> {
    let params = new HttpParams().set('id', id);
    return this.http.delete<void>(this.apiUrl, { params: params });
  }

  
}