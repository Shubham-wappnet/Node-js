/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Controller, Get,Post,Put,Delete, HttpCode, Req, Res, HttpStatus, Body,Param,} from '@nestjs/common';
import { CreateUserDto } from '../Users';
import { Request, Response } from 'express';


let Users = [];

// interface queryParams{
//   id:number
// }

@Controller('/datas')
export class DataContoller {

  @Post('/postdata')
  @HttpCode(HttpStatus.NO_CONTENT)
  
  postData(@Req() req: Request, @Res() res: Response, @Body() datamodel: CreateUserDto) {
    Users.push(datamodel)
    console.log(Users)
    res.status(201).json({ MESSAGES: "data is posted now" })
  }

  @Get()
  getData(){
    return Users;
  }

  @Get(':id')
  getOneData(@Req() req: Request, @Res() res: Response,@Param("id") id:number){
     const check= Users.find(user=>user.id===id);
     if(!check){
      return "false"
     }
     return res.status(200).json({MESSAGES:"found"})
     
  }

  @Put(':id')
  updateData(@Param('id') id:number,@Body() newData:CreateUserDto){
    const dataIndex=Users.findIndex((user)=>user.id===id)
    if(!dataIndex){
      return;
    }
    Users[dataIndex]=newData
  }

  @Delete(':id')
  deleteData(@Param('id') id:number){
    Users=Users.filter((user)=>user.id!==id)
    
  }
}
