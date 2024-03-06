/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { EventEmitter } from 'events';

@Injectable()
export class EventEmitterService {
  private eventEmitter: EventEmitter;

  constructor() {
    this.eventEmitter = new EventEmitter();
  }

  emit(eventName: string, data?: any) {
    this.eventEmitter.emit(eventName, data);
  }

  on(eventName: string, listener: (...args: any[]) => void) {
    this.eventEmitter.on(eventName, listener);
  }
}
