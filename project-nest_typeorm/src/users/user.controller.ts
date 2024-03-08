/* eslint-disable prettier/prettier */
import { Controller,Post,Get,Delete,Body, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";


@Controller('/user')
export class UserController{
    constructor(
        private userService:UserService){}

    @Post()
    createUser(@Body() createUserData:User){
        this.userService.addAll(createUserData);
        return {MESSAGES:"user is added"}
    }
    @Get()
    findAllUser(){
        return this.userService.findAll();
    }

    @Get(':id')
    getOneUser(@Param('id') id:number){
        return this.userService.findOne(id);
    }

    @Get(':userId/photo')
    async getPhoto(@Param('userId') userId:number):Promise<User>{
        return await this.userService.findPhotosByUserId(userId);
    
    }

    @Delete(':id')
    deleteUser(@Param('id') id:number){
        this.userService.remove(id);
    }
}