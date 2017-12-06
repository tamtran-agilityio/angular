import {
  Pipe,
  PipeTransform
} from '@angular/core';

import * as _ from 'lodash';
import { Course } from '@app/courses/model/courses';
import { Category } from '@app/categories/model/category';

@Pipe({
  name: 'titleCarousel'
})
export class TitleCarouselPipe implements PipeTransform {
  /**
   * Get title category
   * @param value list course
   * @param args list category
   */
  transform(value: Course[], args?: Category[]): any {
    let course = _.first(value);
    let title = '';
    _.each(args, (category: Category) => {
      if (category.id === course.categoryId) {
        title = category.title;
      }
    });
    return title;
  }

}
