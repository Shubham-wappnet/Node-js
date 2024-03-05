/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserStore } from './Users/userStore';  // instance of injectable class
//import { DataContoller } from './dataController';
import { UserController } from './Users/userController';
import { UserService } from './Users/userService';
import { UsersModule } from './Users/users.module';
import { DataModule } from './Datas/datas.module';
import { RouterModule,APP_INTERCEPTOR } from '@nestjs/core';
import { JobsModule } from './Jobs/jobs.module';
import { LoggingInterceptor } from './Users/userInterceptor';
//import { Store } from 'store/store';            // instance of injectable class

const mockValues = {
  type: 'dev',
  node: 17
}
const Routes=[{path:"Jobs",module:JobsModule},
              {path:"Users",module:UsersModule},
              {path:"Datas",module:DataModule}
            ]


@Module({

  imports:[UsersModule,DataModule,JobsModule,RouterModule.register(Routes)],
  controllers: [UserController],
  providers: [{ provide: UserStore, useClass: UserStore },
              {provide:APP_INTERCEPTOR,useClass:LoggingInterceptor},
  // providers:[{provide:'Store',useClass:UserStore}]
  // providers:[{provide:UserStore,useClass:Store}]

  // value provider
  { provide: 'DATABASE_NAME', useValue: 'rkjrkj' },
  { provide: 'Mail', useValue: ['abc@gmail.com', 'xyz@gmail.com'] },
  { provide: 'Object', useValue: mockValues },

  UserService],

})
export class AppModule { }
