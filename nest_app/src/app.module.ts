/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
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
//import { Store } from 'store/store';            // instance of injectable class

const mockValues = {
  type: 'dev',
  node: 17
}
const Routes=[
              {path:"Users",module:UsersModule},
              {path:"Datas",module:DataModule},
              {path:"DashBoard",module:AdminModule}
            ]


@Module({

  imports:[DataModule,UsersModule,AdminModule,ConfigModule.forRoot({
                                                         load:configuration,
                                                         envFilePath:['.env'],
                                                         cache:true,
                                                         isGlobal:true}),
                                                         MongooseModule.forRoot(process.env.MONGO_URL),
                                                         RouterModule.register(Routes)],
  controllers: [UserController,DashBoardController],
  providers: [{ provide: UserStore, useClass: UserStore },
              {provide:APP_INTERCEPTOR,useClass:LoggingInterceptor},  // global interceptor
  

  // value provider
  { provide: 'DATABASE_NAME', useValue: 'rkjrkj' },
  { provide: 'Mail', useValue: ['abc@gmail.com', 'xyz@gmail.com'] },
  { provide: 'Object', useValue: mockValues },

  UserService],

})
export class AppModule {}
