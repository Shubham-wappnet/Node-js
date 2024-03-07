/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MiddlewareConsumer,  NestModule } from '@nestjs/common';
import * as session from 'express-session';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat, CatSchema } from '../schemas/cat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: process.env.SECRET,
          resave: false,
          saveUninitialized: false,
        }),
        sessionExpirationMiddleware, 
      )
      .forRoutes('*'); 
  }
}
function sessionExpirationMiddleware(req, res, next) {
  if (req.session && req.session.expires) {
    if (Date.now() > req.session.expires) {
  
      req.session.destroy((err) => {
        if (err) {
          console.error('Error destroying session:', err);
        }
      });
    } else {
      req.session.expires = Date.now() + (60 *  10); 
    }
  }

  next();
}