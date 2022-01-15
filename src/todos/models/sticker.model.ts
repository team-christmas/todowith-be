import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ description: '스티커를 남긴 사용자 ID' })
  userId: number;

  @BelongsTo(() => User, { onDelete: OnDeleteOptions.CASCADE })
  user: User;

  @ForeignKey(() => Todo)
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '투두 ID' })
  todoId: number;

  @BelongsTo(() => Todo, { onDelete: OnDeleteOptions.CASCADE })
  todo: Todo;

  @AllowNull(false)
  @Column({ type: DataType.ENUM({ values: Object.keys(StickerTypes) }) })
  @ApiProperty({ description: '스티커 타입', enum: StickerTypes })
  type: StickerTypes;

  @CreatedAt
  @ApiProperty({ description: '등록 날짜' })
  createdDate: Date;
}
