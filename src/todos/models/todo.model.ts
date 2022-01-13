import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  HasMany,
  Model,
  Table
} from 'sequelize-typescript';
import { OnDeleteOptions } from 'src/common/constants';
import { Goal } from 'src/goals/models/goal.model';
import { Hashtag } from './hashtag.model';
import { Sticker } from './sticker.model';

@Table({ updatedAt: false })
export class Todo extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @Column
  order: string;

  @AllowNull(false)
  @Default(false)
  @Column
  isComplete: boolean;

  @CreatedAt
  createdDate: Date;

  @Column
  notificationTime: Date;

  @ForeignKey(() => Goal)
  @AllowNull(false)
  @Column
  goalId: number;

  @BelongsTo(() => Goal, { onDelete: OnDeleteOptions.CASCADE })
  goal: Goal;

  @HasMany(() => Sticker)
  stickers: Sticker[];

  @HasMany(() => Hashtag)
  hashtags: Hashtag[];
}
