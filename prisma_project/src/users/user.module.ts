/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { PrismaService } from "src/prisma/prisma.service";


@Module({
    imports:[PrismaModule],
    providers:[PrismaService,UserService],
    exports:[UserService]
})
export class UserModule{}