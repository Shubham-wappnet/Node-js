/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';


export type Person = any;

@Injectable()
export class PersonsService {
  private readonly persons = [
    {
      personId: 1,
      personname: 'Shubham',
      password: 'lad123',
    },
    {
      personId: 2,
      username: 'Rohan',
      password: 'modi234',
    },
  ];

  async findOne(username: string): Promise<Person> {
    return this.persons.find(person => person.username === username);
  }
}