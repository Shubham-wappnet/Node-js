/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PhotoModule } from "src/photos/photo.module";
import { PhotoService } from "src/photos/photo.service";

@Module({
    imports:[TypeOrmModule.forFeature([User]),PhotoModule],
    providers:[UserService,PhotoService],
    controllers:[UserController],
    exports:[TypeOrmModule]

})
export class UserModule{}