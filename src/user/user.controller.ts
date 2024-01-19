import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query, Headers, HttpCode} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @Get()
  // findAll(@Query() query) {
  //     // console.log(query)

  //     return {
  //       code:200,
  //       // message:query.name 
  //     }
  // }
  // @Post()
  // create(@Body('age') body){
  //   // console.log(body)

  //   return{
  //     code:200,
  //     // message:body.age
  //   }
  // }


  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }
  @Get(':id')
  findID(@Param() par, @Headers() headers) {
    console.log(headers)

    return{
      code:200

    }
  }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.userService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//     return this.userService.update(+id, updateUserDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.userService.remove(+id);
//   }
// }
}