import { DropdownItem } from './dropdown-item';
import { Topic } from '@app/categories/modal/topic';

export interface Dropdown {
  id: number;
  title: string;
  topics?: Topic[];
  dropdownItem: DropdownItem[];
}
