/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { EventProducerService } from './Events/event-produser-service';
import { EventConsumerService } from './Events/event-listener-service';
import { ConfigModule} from '@nestjs/config';
import { UserStore } from './Users/userStore';  // instance of injectable class
//import { DataContoller } from './dataController';
import { UserController } from './Users/userController';
import { UserService } from './Users/userService';
import { UsersModule } from './Users/users.module';
import { DataModule } from './Datas/datas.module';
import { RouterModule,APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './Users/userInterceptor';
import { AdminModule } from './Admin/admin.module';
import { DashBoardController } from './Admin/dashboardController';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './Cats/cat.module';
import { CatsController } from './Cats/cats.controller';
import { CatsService } from './Cats/cats.service';
import { CatSchema } from './schemas';
import { EventEmitterService } from './Events/event-emitter-service';
import { MulterModule } from '@nestjs/platform-express';



//import { Store } from 'store/store';            // instance of injectable class
import { AuthModule } from './auth/auth.module';
import { PersonsModule } from './persons/persons.module';
import { EncryptionModule } from './encryption/encryption.module';
import { EncryptionController } from './encryption/encryption.controller';
import { EncryptionService } from './encryption/encryption.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskScheduler } from './task-scheduler/task.scheduler';

const mockValues = {
  type: 'dev',
  node: 17
}
const Routes=[
              {path:"Users",module:UsersModule},
              {path:"Datas",module:DataModule},
              {path:"DashBoard",module:AdminModule},
              {path:"cats",module:CatsModule}
            ]


@Module({

  imports:[DataModule,UsersModule,AdminModule,CatsModule,EncryptionModule,MulterModule.register({dest:'./upload'}),ConfigModule.forRoot({
                                                         load:configuration,
                                                         envFilePath:['.env'],
                                                         cache:true,
                                                         isGlobal:true}),
                                                         EventEmitterModule.forRoot(),
                                                         MongooseModule.forRoot(process.env.MONGO_URL),
                                                         MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }]),
                                                         RouterModule.register(Routes),
                                                         ScheduleModule.forRoot(),
                                                         AuthModule,
                                                         PersonsModule],
  controllers: [UserController,DashBoardController,CatsController,EncryptionController],
  providers: [EventEmitterService,EventProducerService,EventConsumerService,{ provide: UserStore, useClass: UserStore },
              {provide:APP_INTERCEPTOR,useClass:LoggingInterceptor},  // global interceptor
              TaskScheduler,
  

  // value provider
  { provide: 'DATABASE_NAME', useValue: 'rkjrkj' },
  { provide: 'Mail', useValue: ['abc@gmail.com', 'xyz@gmail.com'] },
  { provide: 'Object', useValue: mockValues },

  UserService,CatsService,EncryptionService],

})
export class AppModule {}
