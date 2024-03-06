/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
//import cookieParser from 'cookie-parser';

async function bootstrap() {

  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  //app.use(cookieParser())
  await app.listen(process.env.APP_PORT);
  // setTimeout(()=>{
  //      app.close();
  // },3000)
}
bootstrap();