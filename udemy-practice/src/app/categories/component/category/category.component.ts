import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../service/category.service';
import { Category } from '../../modal/category';

@Component({
  selector: 'list-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe( (res: Category[]) => {
      this.categories = res;
    });
  }
}
