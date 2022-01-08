import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Hashtag } from './models/hashtag.model';
import { Sticker } from './models/sticker.model';
import { Todo } from './models/todo.model';

@Module({
  imports: [SequelizeModule.forFeature([Todo, Sticker, Hashtag])],
  exports: [SequelizeModule]
})
export class TodosModule {}
