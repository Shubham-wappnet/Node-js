/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Interval, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class TaskScheduler {
      @Cron(CronExpression.EVERY_10_SECONDS,{
        name:"Application",
    })

      handleCron() {
        console.log("Send notification on every ten seconds");
      }
     
    // @Interval(5000)
    // handleInterval() {
    //     console.log("Send notification on every five seconds");
    // }
    
}