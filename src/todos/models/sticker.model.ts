import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { OnDeleteOptions, StickerTypes } from 'src/common/constants';
import { User } from 'src/users/models/user.model';
import { Todo } from './todo.model';

@Table({ updatedAt: false })
export class Sticker extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @BelongsTo(() => User, { onDelete: OnDeleteOptions.CASCADE })
  user: User;

  @ForeignKey(() => Todo)
  @AllowNull(false)
  @Column
  todoId: number;

  @BelongsTo(() => Todo, { onDelete: OnDeleteOptions.CASCADE })
  todo: Todo;

  @AllowNull(false)
  @Column({ type: DataType.ENUM({ values: Object.keys(StickerTypes) }) })
  type: StickerTypes;

  @CreatedAt
  createdDate: Date;
}
