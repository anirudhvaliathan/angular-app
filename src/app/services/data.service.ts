import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'https://fakestoreapi.com/'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}products/categories`)
    .pipe(catchError(this.errorHandler))
  }

  getSubCategory(category: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}products/category/${category}`)
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}products`)
  }

  getProduct(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}products/${id}`)
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }
}
