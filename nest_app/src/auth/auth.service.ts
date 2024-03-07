/* eslint-disable prettier/prettier */
import {JwtService} from '@nestjs/jwt';
import { PersonsService} from '../persons/persons.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class AuthService {
  constructor(
    private personsService: PersonsService,
    private jwtService:JwtService
    ){}

  async signIn(username: string, pass: string): Promise<any> {
    const person = await this.personsService.findOne(username);
    
    if (!person || person.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { username: person.username, sub: person.personId };
    const accessToken = this.jwtService.sign(payload);
    
    return { accessToken };
  }
}
