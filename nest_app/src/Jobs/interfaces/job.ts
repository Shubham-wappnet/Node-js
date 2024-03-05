/* eslint-disable prettier/prettier */
import { JobType } from "../constants/jobsConstants";

export class Job {
  companyName: string;
  title: string;
  email: string;
  type: JobType;
  experience: number;
  salary: number;
  tags: string[];
  isActive: boolean;
  refId: string;
  id: number;
}