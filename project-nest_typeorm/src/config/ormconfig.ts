/* eslint-disable prettier/prettier */

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/user.entity';
import { Photo } from '../photos/photo.entity';
import { Injectable } from '@nestjs/common';


@Injectable()
export class ConfigService{
    getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'test',
          entities: [User,Photo],
          migrationsTableName: 'typeorm_migrations',
          migrations: ['dist/migrations/*.js'],
        //   cli: {
        //     migrationsDir: 'src/migration',
        //   },
        };
      }
}