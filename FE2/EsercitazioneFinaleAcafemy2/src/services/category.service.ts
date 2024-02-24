import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../inteface/category.interface';
import { Products } from '../inteface/products.interface';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:8080/category';
  private baseUrl = 'http://localhost:8080/categoryById';
  indice:number = 0;

  constructor(private http: HttpClient) { }

  getCategoryById(id: number): Observable<Category> {
    let params = new HttpParams().set('idCategory', id);
    return this.http.get<Category>(this.baseUrl, { params: params });
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${category.idCategory}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    let params = new HttpParams().set('id', id);
    return this.http.delete<void>(this.apiUrl, { params: params });
  }

  

    
}