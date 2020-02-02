import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductListService } from '../product-list/product-list.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css']
})
export class ProductDetailComponent implements OnInit {
  myProducts = [];
  constructor(private route: ActivatedRoute,
    private router: Router, private product: ProductListService) { }

  ngOnInit() {
    const paramId = this.route.snapshot.paramMap.get('id');
    const productDetail = this.product.getProductById(paramId);
    this.myProducts.push(productDetail);
  }

}
