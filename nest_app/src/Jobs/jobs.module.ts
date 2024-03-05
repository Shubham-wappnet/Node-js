/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { JobsApplictaionController } from "./jobsController/jobs-applicationController";
import { JobsInterviewController } from "./jobsController/jobs-interviewController";
import { JobsService } from "./services/jobService";


@Module({
    controllers:[JobsApplictaionController,JobsInterviewController],
    providers:[JobsService]
})
export class JobsModule{}