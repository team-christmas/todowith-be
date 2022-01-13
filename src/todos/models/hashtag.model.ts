import { AllowNull, BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { OnDeleteOptions } from 'src/common/constants';
import { Todo } from './todo.model';

@Table
export class Hashtag extends Model {
  @ForeignKey(() => Todo)
  @AllowNull(false)
  @Column
  todoId: number;

  @BelongsTo(() => Todo, { onDelete: OnDeleteOptions.CASCADE })
  todo: Todo;

  @AllowNull(false)
  @Column
  name: string;
}
