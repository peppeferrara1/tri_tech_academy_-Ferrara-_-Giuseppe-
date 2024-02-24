import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Products } from '../inteface/products.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:8080/getProductsById';
  private apiUrl = 'http://localhost:8080/products';
  indice1: number = 0;

  constructor(private http: HttpClient) { }

  getProductsByCategoryId(id: number): Observable<Products[]> {
    let params = new HttpParams().set('categoryId', id);
    return this.http.get<Products[]>(this.baseUrl, { params: params });
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl);
  }

  addProducts(products: Products): Observable<Products> {
    return this.http.post<Products>(this.apiUrl, products);
  }

  updateProducts(products: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiUrl}/${products.idProduct}`, products);
  }

  deleteProducts(id: number): Observable<void> {
    let params = new HttpParams().set('id', id);
    return this.http.delete<void>(this.apiUrl, { params: params });
  }

  
}