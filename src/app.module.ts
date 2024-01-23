import { Get, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoController } from './todo/todo.controller';
import { ImageModule } from './image/image.module';
import {TypegooseModule} from "@m8a/nestjs-typegoose";

@Module({
  imports: [UserModule, ImageModule, TypegooseModule.forRoot('mongodb://localhost:27017/image')],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
