import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
// import { PRODUCTS } from './mock-data';
@Injectable({
    providedIn: 'root'
  })
export class ProductListService {
  private product: any = [];
  cars =
[
  {
    id: 1,
    name: 'BMW',
    image: 'Unknown',
    summary: 'xyz'
  },
  {
    id: 2,
    name: 'BMW',
    image: 'Unknown',
    summary: 'xyz'
  },
  {
    id: 3,
    name: 'BMW',
    image: 'Unknown',
    summary: 'xyz'
  },
  {
    id: 4,
    name: 'BMW',
    image: 'Unknown',
    summary: 'xyz'
  },
];

constructor() { }
getProducts() {
  return this.cars;
}
getProductById(id) {
  for (let i = 0; i < this.cars.length; ++i) {
    if (this.cars[i].id == id) {
      return this.cars[i];
    }
  }
}
getColumns(): string[] {
  return ['id', 'name', 'image', 'summary'];
}
}
