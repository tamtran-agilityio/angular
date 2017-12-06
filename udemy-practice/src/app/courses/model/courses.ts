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
  description: string;
  requirements: string;
  teacherId: number;
  rating: number;
  price: number;
  discountPrice: number;
  date: string;
  language?: string;
}
