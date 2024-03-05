/* eslint-disable prettier/prettier */
import {  Module,Global } from "@nestjs/common";
import { UserController } from "./userController";
import { UserService } from "./userService";

@Global()   //we use any where
@Module({
       
       controllers:[UserController],
       providers:[UserService],
       exports:[UserService]
})
export class UsersModule{}