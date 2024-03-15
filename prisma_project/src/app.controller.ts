/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Put,Delete,Body, Param } from '@nestjs/common';
import { UserService } from './users/user.service';
import { AppService } from './app.service';
import { User as UserModel } from '@prisma/client';
import { UserModule } from './users/user.module';


@Controller()
export class AppController {
  constructor(private readonly userService:UserService,
              private readonly appService: AppService,
              ) {}
  
  @Post('user')
  async addUser(@Body() userData:UserModel):Promise<UserModel>{
    return this. userService.createUser(userData)
  }

  @Get('getusers')
  async getAllUser(){
    return this.userService.getUsers();
  }

  @Put('user/:id')
    async chageUser(@Param('id') id:string, @Body() updateData:UserModel):Promise<UserModule>{
      //const uid=parseInt(id);
      return this.userService.updateUser({where:{id:Number(id)},data:updateData})
      //return {MESSAGE:"userdata is updated"}
    }
  
  @Delete('user/:id')
   removeUser(@Param('id') id:number){
      this.userService.deleteUser({where:{id}});
    }

}
