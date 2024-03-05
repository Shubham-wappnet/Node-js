/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {

  dotenv.config();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env['APP_PORT']);
  // setTimeout(()=>{
  //      app.close();
  // },3000)
}
bootstrap();