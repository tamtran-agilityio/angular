export interface Course {
  id: number;
  type: string;
  categoriesId: number;
  topicsId: number;
  name: string;
  title?: string;
  subtitle?: string;
  image: string;
  learning: string;
  decsription: string;
  requirements: string;
  teachId: number;
  rating: number;
  date: string;
  language?: string;
}
