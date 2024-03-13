/* eslint-disable prettier/prettier */
import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
import { UserModule } from './users/user.module';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';
import { Photo } from './photos/photo.entity';
import { PhotoModule } from './photos/photo.module';
import { PhotoContoller } from './photos/photo.controller';
import { PhotoService } from './photos/photo.service';
import { EnvConfigService } from './configuration/config.service';
import { EnvConfigModule } from './configuration/config.module';
// import { ConfigModule } from './config/ormconfig.module';
// import { ConfigService } from './config/ormconfig';



// @Module({
//   imports: [ConfigModule,
//             TypeOrmModule.forRootAsync({
//              useFactory: async (configService: ConfigService) =>configService.getTypeOrmConfig(),
//              inject:[ConfigService]
//              }),UserModule,PhotoModule],
//   controllers: [AppController,UserController,PhotoContoller],
//   providers: [AppService,UserService,PhotoService],
// })
// export class AppModule {
//   constructor(private datasource:DataSource){}
// }

// @Module({
//   imports: [ EnvConfigModule,
//     TypeOrmModule.forRootAsync({
//       imports:[EnvConfigModule],
//       useFactory:(configservice:EnvConfigService)=>({
//         type: 'mysql',
//         host: configservice.get('HOST'),
//         port: +configservice.get('PORT'),
//         username: configservice.get('USERNAME'),
//         password:  configservice.get('PASSWORD'),
//         database: configservice.get('DATABASE'),
//         entities: [User,Photo],
//         migrations:["src/migration/*.ts"],
//         migrationsTableName:"custome_migration_table",
      
//         synchronize: true,
//         autoLoadEntities:true,
//       }),
//       inject:[EnvConfigService]
   
//   }),
  
//   UserModule,PhotoModule],
//   controllers: [AppController,UserController,PhotoContoller],
//   providers: [AppService,UserService,PhotoService],
// })
// export class AppModule {
//   constructor(private datasource:DataSource){}
// }

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'test',
    entities: [User,Photo],
    migrations:["src/migration/*.ts"],
    migrationsTableName:"custome_migration_table",
  
    synchronize: true,
    autoLoadEntities:true,
  }),
  UserModule,PhotoModule],
  controllers: [AppController,UserController,PhotoContoller],
  providers: [AppService,UserService,PhotoService],
})
export class AppModule {
  constructor(private datasource:DataSource){}
}