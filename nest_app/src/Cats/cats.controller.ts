/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, UsePipes, UseInterceptors,UploadedFiles } from '@nestjs/common';
import { ZodValidationPipe } from './catValidation';

import { CatsService } from './cats.service';
import { Cat } from '../schemas/cat.schema';
import { CreateCatDto, createcatSchema } from './dto/create-cat-dto';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  
  @UsePipes(new ZodValidationPipe(createcatSchema))
  async createCat(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
}

// single file upload
// @Post('upload')
// @UseInterceptors(FileInterceptor('file'))
//   async postFile(@UploadedFiles() file:Express.Multer.File):Promise<object> {
//     console.log(file)
//     return{
//       MESSAGE:"file is uploaded"
//     }
//   }

// more than one file
  // @Post('upload')
  // @UseInterceptors(FileFieldsInterceptor([
  //   {
  //     name:'file',maxCount:2
  //   },
  //   {
  //     name:'file2',maxCount:2
  //   }
  // ]))
  //   async postFile(@UploadedFiles() file:{file?:Express.Multer.File[],file2?:Express.Multer.File[]}):Promise<object> {
  //     console.log(file)
  //     return{
  //       MESSAGE:"file is uploaded"
  //     }
  //   }

  //multiple files
  @Post('load')
  @UseInterceptors(FilesInterceptor('file'))
  async postFile(@UploadedFiles() file:Array<Express.Multer.File>):Promise<object> {
    console.log(file)
    return{
      MESSAGE:"file uploaded"
    }
  }
  

  @Get()
   findAllCats(): Promise<Cat[]> {
  
   return this.catsService.findAll();
  }
}
