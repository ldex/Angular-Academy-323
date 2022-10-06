import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, catchError, delay, shareReplay, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = environment.productsApi;
  products$: Observable<Product[]>;

  constructor(private http: HttpClient) {
    this.initProducts();
  }

  initProducts() {
    this.products$ = this.http.get<Product[]>(this.baseUrl);
  }

}
