/* eslint-disable prettier/prettier */
import { Reflector } from '@nestjs/core';   // used to create roled decorator

export const Roles = Reflector.createDecorator<string[]>();