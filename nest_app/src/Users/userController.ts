/* eslint-disable prettier/prettier */

import { Controller, Get,Post,Put,Delete, Body, Param, ParseIntPipe,UsePipes, UseGuards, UseInterceptors} from "@nestjs/common";

import{ZodValidationPipe} from './userValidation'
import { CreateUserDto } from '.';
import {createUserSchema} from './create-user-Dto'
import { AuthGuard } from "./userAuthGaurd";
import { UserService } from "./userService"
import { LoggingInterceptor } from "./userInterceptor";


//import { Store } from 'store/store'; 

@Controller('/users')
export class UserController{

    // 1.for useValue
    //   constructor(@Inject('Mail') private objects:Record<string,any>){ 
    //     console.log(this.objects)
    //   }


    // 2.for scope
    // constructor(private store:UserStore){  
    // console.log(this.store)
    // }
    
    //    @Get()
    //    getData(){
    //    return "get an email";
    //  }


    // 3.for service
    constructor(private userService:UserService){}
    @Post()
    @UseInterceptors(LoggingInterceptor)
    @UseGuards(AuthGuard)
    @UsePipes(new ZodValidationPipe(createUserSchema))
    createUser(@Body() createUserData:CreateUserDto){
        this.userService.addUser(createUserData);
        return {MESSAGES:"user is added"}
    }

    @Get()
    findAllUsers(){
        return this.userService.getUsers();
    }
    
    @Get(':id')
    findUser(@Param('id',ParseIntPipe) id:number){
        console.log(typeof id)
        return this.userService.getUser(id)
    }
    

    @Put(':id')
    @UsePipes(new ZodValidationPipe(createUserSchema))
    upadatedUser(@Param('id',ParseIntPipe) id:number, @Body() upadateUserData:CreateUserDto){
        this.userService.updateUser(id,upadateUserData)
        return {MESSAGES:"user is updated"}
    }
 
   

    @Delete(':id')
    deletedUser(@Param('id') id:number){
        this.userService.deleteUser(id)
        return {MESSAGES:"user is deleted"}
    }
}