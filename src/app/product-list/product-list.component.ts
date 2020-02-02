import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  changeText: boolean;
  color = '';
  products = [];
  columns: string[];
  constructor(private product: ProductListService) {
  this.changeText = false;
  }
  ngOnInit() {
    this.columns = this.product.getColumns();
    this.products = this.product.getProducts();
  }
  changeStyle($event) {
    this.color = $event.type === 'mouseover' ? 'yellow' : '';
  }
}
