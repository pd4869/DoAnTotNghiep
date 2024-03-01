import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
    getList() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/sach');
    }
    getListloai() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/loaisach');
    }
    removeItem(id: number): Observable<any> {
      const url = `http://localhost:3000/loaisach/remove/${id}`;
      return this.http.get<any>(url);     
    }  
    addItem(TheLoai: string): Observable<any> {
      const url = 'http://localhost:3000/loaisach/add';
      const body = { TheLoai: TheLoai };
      return this.http.post<any>(url, body);
    }
    editItem(id: number, TheLoai: string): Observable<any> {
      const url = `http://localhost:3000/loaisach/edit/${id}`;
      const body = { TheLoai: TheLoai };
      return this.http.post<any>(url, body);
    }
    getItemById(id: any): Observable<any> {
      const url = `http://localhost:3000/loaisach/get-one/${id}`;
      return this.http.get<any>(url);
    }
    getItemByIdsp(id: any): Observable<any> {
      const url = `http://localhost:3000/sach/get-one/${id}`;
      return this.http.get<any>(url);
    }
    createOrder(orderData: any): Observable<any> {
      return this.http.post(`http://localhost:3000/hoadonban/createOrder`, orderData);
    }
    getlistByIdsp(id: any): Observable<any> {
      const url = `http://localhost:3000/sach/get-list/${id}`;
      return this.http.get<any>(url);
    }
    getListBlog() : Observable<any[]> {
      return this.http.get<any>('http://localhost:3000/tintuc');
    }
    getItemByIdBlog(id: any): Observable<any> {
      const url = `http://localhost:3000/tintuc/get-one/${id}`;
      return this.http.get<any>(url);
    }
    getItemByIdctdh(id: any): Observable<any> {
      const url = `http://localhost:3000/hoadonban/ctdh/get-one/${id}`;
      return this.http.get<any>(url);
    }
    
}
