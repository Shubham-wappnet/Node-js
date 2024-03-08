/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Photo } from "./photo.entity";
import { PhotoService } from "./photo.service";
import { PhotoContoller } from "./photo.controller";


@Module({
    imports:[TypeOrmModule.forFeature([Photo])],
    providers:[PhotoService],
    controllers:[PhotoContoller],
    exports:[TypeOrmModule]

})
export class PhotoModule{}