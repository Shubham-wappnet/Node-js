/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, UsePipes, UseInterceptors,UploadedFiles } from '@nestjs/common';
import { ZodValidationPipe } from './catValidation';
import { CatsService } from './cats.service';
import { Cat } from '../schemas/cat.schema';
import { CreateCatDto, createcatSchema } from './dto/create-cat-dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  
  @UsePipes(new ZodValidationPipe(createcatSchema))
   createCat(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.create(createCatDto);
}
@Post('upload')
@UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFiles() files) {
    return this.catsService.uploadFile(files);
  }

  @Get()
   findAllCats(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
