import { Injectable } from '@angular/core';
export class Product {
    constructor(public id: number,
        public name: string) {}
}

let products = [
    new Product(1, 'Mac Pro'),
    new Product(2, 'Car'),
    new Product(3, 'Cup'),
    new Product(2, 'Car')
];

let productPromise = Promise.resolve(products);

@Injectable()
export class ProductService {

    getProduct() {
        return productPromise;
    }
}
