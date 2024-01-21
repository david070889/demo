import { Controller, Get, HttpCode, Param, Patch, Query, HttpStatus, Post , Body ,Header} from '@nestjs/common';
import { createtodo_dto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
    @Get()
    @Header('dav1g', 'header no.1')
    getall(){
        return 0
    }

    @Get('example')
    getexample(){
        return {
            id:1,
            title:'example',
            describiotn:2
        }
    }

    // @Get(':id')
    // getid(@Param('id') param:string){
    //     return {
    //         function:'getid',
    //         id:`${param}`
    //     }
    // }

    @Get('quer')
    getquery(@Query('limit') limit:number = 10, @Query('offset') offset:number = 0){
        const list = [
           0, 1, 2, 3, 4, 5, 6, 7, 8, 9
          ];
        // console.log(list.slice(offset,limit));
        return list.slice(offset, limit)
    }
    @Get('/no')
    @Patch()
    @HttpCode(HttpStatus.NO_CONTENT)
    get(){
        return 204
    }

    @Post()
    create(@Body() dto:createtodo_dto) {
        const id = 1
        console.log(dto)
        return {
            id , ...dto
        }
    }
    

}
