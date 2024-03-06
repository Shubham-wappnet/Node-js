/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { EventEmitterService } from './event-emitter-service';

@Injectable()
export class EventProducerService {
  constructor(private readonly eventEmitterService: EventEmitterService) {}

  performAction() {
    // action
    console.log('Data is added');
    
    this.eventEmitterService.emit('actionPerformed', { message: 'According to data you are correct' });
  }
}
