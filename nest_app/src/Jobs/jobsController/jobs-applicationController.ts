/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Put,Param,Query,Body,ParseEnumPipe, ParseIntPipe, ParseUUIDPipe } from "@nestjs/common";
import { JobsService } from "../services/jobService";
import { JobType } from "../constants/jobsConstants";
import { Job } from "../interfaces/Job";

@Controller('/jobs')
export class JobsApplictaionController{
      constructor(private readonly jobsService:JobsService){}
    
      @Post()
      addAllJob(@Body() jobdata:Job){
         this.jobsService.addJob(jobdata)
         return {MESSAGES:"user is added"}
      }
      @Get(':id')
      findJobById(@Param("id",ParseIntPipe) id:number){
        console.log(typeof id)
        return this.jobsService.findById(id)
      }
      @Get("ref/:refId")
      findJobByRefId(@Param("refId",ParseUUIDPipe) id:string){
            return this.jobsService.findByRefId(id)
      }
       @Put("exp/:id")
      // setUpdateJobExp(@Param("id") id: number, @Query("exp") exp: number) {
      //   return this.JobsService.setJobExp(id, exp);
      // }
      // @Put("type/:id")
      // // toggleJobType(@Param("id") id: number,@Body("type", new ParseEnumPipe(JobType)) type: JobType) {
      // //   return this.JobsService.toggleJobType(id, type);
      // // }
      toggleJobType(@Param("id") id: number,@Body("type",new ParseEnumPipe(JobType)) type: JobType) {
        return this.jobsService.toggleJobType(id, type);
       }

}