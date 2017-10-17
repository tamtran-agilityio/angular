import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class Product {
    constructor(
        public id: number,
        public name: string,
        public decs: string,
        public cost: number
    ) {}
}

let PRODUCTS = [
    new Product(1, 'Mac Pro', 'This is my computer', 10),
    new Product(2, 'Car', 'Honda airblack', 40),
    new Product(3, 'Cup', 'This fisrt cup', 100)
];


@Injectable()
export class ProductService {
    private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(PRODUCTS);

    getProduct() {
        return this.products$;
    }
    getProductDetail(id: number | string) {
        return this.getProduct()
          .map(products => products.find(product => product.id === +id));
    }
}
