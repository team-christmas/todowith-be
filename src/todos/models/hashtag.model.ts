import { ApiProperty } from '@nestjs/swagger';
import { AllowNull, BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { OnDeleteOptions } from 'src/common/constants';
import { Todo } from './todo.model';

@Table
export class Hashtag extends Model {
  @ForeignKey(() => Todo)
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '투두 ID' })
  todoId: number;

  @BelongsTo(() => Todo, { onDelete: OnDeleteOptions.CASCADE })
  todo: Todo;

  @AllowNull(false)
  @Column
  @ApiProperty({ description: '해시태그 이름', required: false })
  name: string;
}
