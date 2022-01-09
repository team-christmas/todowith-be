import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  ForeignKey,
  IsIn,
  Model,
  Table
} from 'sequelize-typescript';
import { ON_DELETE_OPTIONS, STICKER_TYPES } from 'src/common/constants';
import { User } from 'src/users/models/user.model';
import { Todo } from './todo.model';

@Table({ updatedAt: false })
export class Sticker extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @BelongsTo(() => User, { onDelete: ON_DELETE_OPTIONS.CASCADE })
  user: User;

  @ForeignKey(() => Todo)
  @AllowNull(false)
  @Column
  todoId: number;

  @BelongsTo(() => Todo, { onDelete: ON_DELETE_OPTIONS.CASCADE })
  todo: Todo;

  @AllowNull(false)
  @IsIn([[STICKER_TYPES.THUMS_UP]])
  @Column
  type: string;

  @CreatedAt
  createdDate: Date;
}
