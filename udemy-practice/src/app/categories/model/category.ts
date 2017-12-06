import { Topic } from '@app/categories/model/topic';

export interface Category {
  id: number;
  title: string;
  topics: Topic[];
}
