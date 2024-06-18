import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/sach/search';

  constructor(private http: HttpClient) { }

  searchProducts(query: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?query=${query}`);
  }
}