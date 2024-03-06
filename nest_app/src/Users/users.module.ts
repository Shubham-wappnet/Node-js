/* eslint-disable prettier/prettier */
import {  Module,Global, OnModuleInit, OnModuleDestroy } from "@nestjs/common";

import { UserController } from "./userController";
import { UserService } from "./userService";

@Global()   //we use any where
@Module({
       
       controllers:[UserController],
       providers:[UserService],
       exports:[UserService]
})
export class UsersModule implements OnModuleInit ,OnModuleDestroy{
       onModuleInit() {
           console.log("User module inits")
       }
       onModuleDestroy() {
           console.log("User module is terminated")
       }
}