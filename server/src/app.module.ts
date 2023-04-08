import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Task, TaskSchema } from './todo/schema/task.schema';

// mongodb://localhost:27017/CarShop
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
