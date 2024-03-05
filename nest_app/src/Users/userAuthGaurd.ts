/* eslint-disable prettier/prettier */
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
   
import { Roles } from './userDecorator'; // set the role per handller

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {   // executionContext inherit argumenthost
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  private validateRequest(request): boolean {
    if (!request) {
      throw new Error('Request object is missing.');
    }
    if (!request.body || !request.body.name || !request.body.email) {
      throw new Error('name and email are required.');
    }
    return true;
  }
}

