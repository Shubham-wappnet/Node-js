/* eslint-disable prettier/prettier */
import { Module, OnModuleInit } from "@nestjs/common";
import { DataContoller } from "src/Datas/dataController";


@Module({
    imports:[],
    controllers:[DataContoller]
})
export class DataModule implements OnModuleInit{
    onModuleInit() {
        console.log("Data module inits")
    }
}
