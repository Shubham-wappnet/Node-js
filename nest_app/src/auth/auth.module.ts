/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PersonsModule } from 'src/persons/persons.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstant } from './auth.constant';



@Module({
  imports:[PersonsModule,JwtModule.register({
    global:true,
    secret:jwtConstant.secret,
    signOptions:{expiresIn:'300s'},
  }),
],
  providers: [AuthService],
  controllers: [AuthController],
  
})
export class AuthModule {}
