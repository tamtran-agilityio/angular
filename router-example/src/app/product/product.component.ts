import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ProductService, Product } from './product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public products: Product[];
  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit() {
      this.productService.getProduct().then(products => this.products = products);
  }
}
