import { AllowNull, BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ON_DELETE_OPTIONS } from 'src/common/constants';
import { Todo } from './todo.model';

@Table
export class Hashtag extends Model {
  @ForeignKey(() => Todo)
  @AllowNull(false)
  @Column
  todoId: number;

  @BelongsTo(() => Todo, { onDelete: ON_DELETE_OPTIONS.CASCADE })
  todo: Todo;

  @AllowNull(false)
  @Column
  name: string;
}
