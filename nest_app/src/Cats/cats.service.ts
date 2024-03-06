/* eslint-disable prettier/prettier */
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from '../schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat-dto';
//import { File } from 'express';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

//    create(createCatDto: CreateCatDto): Promise<Cat> {
//     const createdCat = new this.catModel(createCatDto);
//     return createdCat.save();
//   }
async create(createCatDto: CreateCatDto): Promise<Cat> {
    const { name, age, breed, imageUrl } = createCatDto;

    const newCat = new this.catModel({
      name,
      age,
      breed,
      imageUrl 
    });

    return await newCat.save();
  }

   findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async uploadFile(files: File[]): Promise<Cat> {
    const imageUrl = files[0].fileName;
    const newCat = new this.catModel({ imageUrl });
    return newCat.save();
  }
}
