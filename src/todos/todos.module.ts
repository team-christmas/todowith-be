import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hashtag } from './models/hashtag.model';
import { Sticker } from './models/sticker.model';
import { Todo } from './models/todo.model';
import { TodosController } from './todos.controller';

@Module({
  imports: [SequelizeModule.forFeature([Todo, Sticker, Hashtag])],
  exports: [SequelizeModule],
  controllers: [TodosController]
})
export class TodosModule {}
