import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() { }

  getLocalStorage(item: string) {
    return JSON.parse(localStorage.getItem(item));
  }

  setLocalStorage(item: string, data: any) {
    return localStorage.setItem(item, data);
  }

  getShortName(value: string) {
    return value.split(' ').reduce(function(previous, current){
      return {name : previous.name + ' ' + current[0]};
    }, {name : ''});
  }
}
