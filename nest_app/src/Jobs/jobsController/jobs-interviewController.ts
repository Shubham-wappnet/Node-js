/* eslint-disable prettier/prettier */
import { Controller,Get } from "@nestjs/common";

@Controller('/jobs-interview')
export class JobsInterviewController{
      @Get()
      requestHandleller(){
        return "Jobs interview route"
      }
}