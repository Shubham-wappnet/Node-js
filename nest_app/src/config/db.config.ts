/* eslint-disable prettier/prettier */
import { registerAs } from "@nestjs/config"

export const DB_Config=registerAs("DATABASE",()=>{
    return{
        DATABASE_PORT:process.env['DATABASE_PORT'],
        DATABASE_NAME:process.env['DATABASE_NAME'],
        DATABASE_HOST:process.env['DATABASE_HOST']

    }
});