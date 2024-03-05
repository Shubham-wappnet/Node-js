/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { DataContoller } from "src/Datas/dataController";


@Module({
    imports:[],
    controllers:[DataContoller]
})
export class DataModule{}
