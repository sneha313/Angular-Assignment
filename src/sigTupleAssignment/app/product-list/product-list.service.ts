import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { delay } from 'rxjs/operators';
import { PRODUCTS } from './mock-data';
@Injectable({
    providedIn: 'root'
  })
export class ProductList {
constructor() { }
// getProducts(): Observable<any[]> {
//   return of(PRODUCTS).delay(100);
// }
getColumns(): string[] {
  return ['name', 'image', 'summary'];
}
}
