/* eslint-disable prettier/prettier */
import { Post, HttpCode, Req, Res,HttpStatus, Query,Header, Injectable } from '@nestjs/common'
import { Request, Response } from 'express';

interface queryParams{
    id:number,
    name:string
}


//@Injectable()

export class Store {
    
    
    @Post('/profile') // end-point
    @HttpCode(HttpStatus.NO_CONTENT)
    @Header('Cache-Control','none')
    
    postProfile(@Req() req: Request, @Res() res: Response,@Query() query :queryParams)
     {
        console.log(query.id,query.name)
        res.status(201).json({
            basic: {
                name: 'Shubham',
                surname: 'Lad',
            },
            extra: {
                org: 'Wappnet',
                desg: 'trainee',
            },
        });
    }
}