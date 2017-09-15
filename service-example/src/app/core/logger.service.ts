import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  logs: string[] = [];

  log(message: string, value: any) {
    this.logs.push(message);
    console.log(message, value);
  }
}
