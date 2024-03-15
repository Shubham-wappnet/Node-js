/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './users/user.service';
import { UserModule } from './users/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule,UserModule],
  controllers: [AppController],
  providers: [PrismaService,UserService,AppService],
})
export class AppModule {}
