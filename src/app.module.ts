import { Get, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoController } from './todo/todo.controller';

@Module({
  imports: [UserModule],
  controllers: [AppController, TodoController],
  providers: [AppService],
})
export class AppModule {}
