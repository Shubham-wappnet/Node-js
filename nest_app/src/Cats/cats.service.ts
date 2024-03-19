/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat-dto';




@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

async create(createCatDto: CreateCatDto): Promise<Cat> {
    const { name, age, breed, imageUrl,password } = createCatDto;

    const newCat = new this.catModel({
      name,
      age,
      breed,
      imageUrl,
      password
      
    });

    return await newCat.save();
  }

   findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

}
