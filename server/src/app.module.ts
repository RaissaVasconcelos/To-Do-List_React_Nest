import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongodb:27017/todo'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
