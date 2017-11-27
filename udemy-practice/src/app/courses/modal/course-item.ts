import { Course } from '@app/courses/modal/course';
import { Chapter } from '@app/courses/modal/chapter';

export interface CourseItem {
  course: Course;
  courses?: Course[];
  chapters?: Chapter[];
  active: boolean;
  countLecture: number;
}
