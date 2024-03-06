/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { EventEmitterService } from './event-emitter-service';

@Injectable()
export class EventConsumerService {
  constructor(private readonly eventEmitterService: EventEmitterService) {

    this.eventEmitterService.on('actionPerformed', (data) => {
      console.log('Event received:', data);
    });
  }
}
