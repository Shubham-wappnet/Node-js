/* eslint-disable prettier/prettier */
import { Controller,Post,Get,Delete,Body, Param } from "@nestjs/common";
import { PhotoService } from "./photo.service";
import { Photo } from "./photo.entity";


@Controller('/photo')
export class PhotoContoller{
    constructor(private photoService:PhotoService){}
    @Post()
    createPhoto(@Body() addPhoto:Photo){
        this.photoService.addAll(addPhoto);
        return {MESSAGES:"photo is added"}
    }
    @Get()
    getPhotos(){
        return this.photoService.findAll();
    }
    @Get(':photoId')
    getOnePhoto(@Param('photoId') photoId:number){
        return this.photoService.findOne(photoId);
    }
    @Delete(':photoId')
    deletePhoto(@Param('photoId') photoId:number){
        this.photoService.remove(photoId);
    }
}