/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserService } from "./user.service";


@Module({
    imports:[UserService],
    providers:[],
    exports:[UserService]
})
export class UserModule{}