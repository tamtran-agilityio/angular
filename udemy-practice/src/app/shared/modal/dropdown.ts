import { DropdownItem } from './dropdown-item';

export interface Dropdown {
  id: number;
  title: string;
  dropdownItem: DropdownItem[];
}
