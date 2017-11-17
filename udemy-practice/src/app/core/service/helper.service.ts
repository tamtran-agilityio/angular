import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() { }

  getLocalStorage(item: string) {
    localStorage.getItem(item);
  }

  setLocalStorage(item: string, data: any) {
    localStorage.setItem(item, data);
  }
}
