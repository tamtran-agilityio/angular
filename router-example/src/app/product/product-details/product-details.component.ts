import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService, Product } from '../product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product$: Observable<Product>;
    constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService) { }

    ngOnInit() {
        this.product$ = this.route.paramMap.switchMap((params: ParamMap) =>
            this.productService.getProductDetail(params.get('id'))
        );
    }

    onBack() {
        this.router.navigate(['/product']);
    }

}
