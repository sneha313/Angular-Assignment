import { Component, OnInit } from '@angular/core';
import { ProductList } from './product-list.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<any[]>;
  columns: string[];
  constructor(private product: ProductList) {}
  ngOnInit() {
    this.columns = this.product.getColumns();
    // this.products = this.product.getProducts();
  }

}
