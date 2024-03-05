/* eslint-disable prettier/prettier */
import { Controller,Get, Param } from "@nestjs/common";
import { UserService } from "src/Users/userService";

@Controller('/dashboard')
export class DashBoardController{
  constructor(private userService:UserService ){}  // Admin uses service of User module
      @Get(':id')
        getUsersOnDashboard(@Param ('id') id:number){
          //console.log(typeof id)
          return this.userService.getUser(id)
        }
      }  