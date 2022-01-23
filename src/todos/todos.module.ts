import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hashtag } from './models/hashtag.model';
import { Todo } from './models/todo.model';
import { TodosController } from './todos.controller';

@Module({
  imports: [SequelizeModule.forFeature([Todo, Hashtag])],
  exports: [SequelizeModule],
  controllers: [TodosController]
})
export class TodosModule {}
