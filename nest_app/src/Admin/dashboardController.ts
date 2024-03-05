/* eslint-disable prettier/prettier */
import { Controller,Get } from "@nestjs/common";

@Controller('/dashboard')
export class DashBoardController{
      @Get()
      requestHandleller(){
        return "Admin dashboard route"
      }
}