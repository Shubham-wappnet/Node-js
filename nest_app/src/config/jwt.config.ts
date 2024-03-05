/* eslint-disable prettier/prettier */
import { registerAs } from "@nestjs/config";

export const JWT_Config=registerAs("JWT",()=>{
     return{
        JWT_SECRET:process.env['JWT_SECRET'],
        JWT_EXPIRE_TIME:process.env['JWT_EXPIRE_TIME']
     }
});