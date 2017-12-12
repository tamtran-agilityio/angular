import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  logs: string[] = [];
  constructor() { }

  /**
   * Handle logger infor
   * @param message the infor content
   */
  logInfo(message: any) {
    this.log(`INFO: ${message}`);
  }

  /**
   * Handle logger debugger
   * @param message the debugger content
   */
  logDebug(message: any) {
    this.log(`DEBUG: ${message}`);
  }

  /**
   * Handle logger error
   * @param message the error content
   */
  logError(message: any) {
    this.log(`ERROR: ${message}`, true);
  }

  /**
   * Handle show content
   * @param message the message infor
   * @param isErr condition show message
   */
  private log(message: any, isErr = false) {
    this.logs.push(message);
    isErr ? console.error(message) : console.log(message);
  }
}
