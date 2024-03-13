/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv'

@Injectable()
export class EnvConfigService{
    constructor(){
        dotenv.config();
    }
    get(key:string):string{
        const data = process.env[key];
        console.log(data)
        return data
    }
}