/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { MulterModule  } from '@nestjs/platform-express'; 
import { diskStorage } from 'multer';


@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileName = `${file.originalname}`;
          cb(null, fileName);
        },
      }),
    }),
  ],
  exports: [MulterModule], 
})
export class MyMulterModule {}
