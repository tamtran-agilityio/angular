import { Part } from './part';

export interface Chapter {
  courseId: number;
  id: number;
  name: string;
  parts: Part[];
}
