import { Teacher } from '../../teacher/modal/teacher';
export interface Course {
  id: number;
  type: string;
  categoryId: number;
  topicId: number;
  name: string;
  title?: string;
  subtitle?: string;
  images: string;
  learning: string;
  decsription: string;
  requirements: string;
  teacherId: number;
  teacher: Teacher;
  rating: number;
  price: number;
  discountPrice: number;
  date: string;
  language?: string;
}
