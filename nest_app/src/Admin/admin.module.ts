/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { UsersModule } from "src/Users/users.module";
import { DashBoardController } from "./dashboardController";
import { UserService } from "src/Users/userService";


@Module({
    imports:[UsersModule], //reference module
    controllers:[DashBoardController],
    providers:[UserService]

})
export class AdminModule{}