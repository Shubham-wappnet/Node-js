/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ConfigService } from "./ormconfig";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
    imports:[TypeOrmModule.forRootAsync({
        useFactory:  (configService: ConfigService) =>configService.getTypeOrmConfig(),
    })
    ],
    providers:[ConfigService],
    exports:[TypeOrmModule.forRootAsync({
        useFactory:  (configService: ConfigService) =>configService.getTypeOrmConfig(),})
    ]
})
export class ConfigModule{}
