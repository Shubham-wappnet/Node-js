/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Photo } from "./photo.entity";


export class PhotoService{
    constructor(@InjectRepository(Photo) private photoRepository:Repository<Photo>){}

    async addAll(photo: Photo): Promise<Photo> {
        const {photoId,photo_type,userId  } = photo;
    
        const newPhoto =  this.photoRepository.create({
          photoId,photo_type,userId
        });
    
        return await this.photoRepository.save(newPhoto);
    }

    findAll(): Promise<Photo[]> {
        return this.photoRepository.find();
    }

    findOne(photoId:number):Promise<Photo>{
        return this.photoRepository.findOneBy({photoId})
    }

    async remove(photoId:number):Promise<any>{
        await this.photoRepository.delete({photoId})
    }
}