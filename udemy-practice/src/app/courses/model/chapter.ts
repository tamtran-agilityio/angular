import { Section } from '@app/courses/model/section';

export interface Chapter {
  id: number;
  title: string;
  sections: Section[];
}
