/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor {
  intercept(context, next) {
    console.log("before request handling");

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => console.log(`After... ${Date.now() - now}ms`)),
      );
  }
}