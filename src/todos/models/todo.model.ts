import { ApiProperty } from '@nestjs/swagger';
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

@Table({ updatedAt: false })
export class Todo extends Model {
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '투두 이름' })
  name: string;

  @Column
  @ApiProperty({ description: '순서', required: false })
  order: string;

  @AllowNull(false)
  @Default(false)
  @Column
  @ApiProperty({ description: '완료 여부', default: false })
  isComplete: boolean;

  @CreatedAt
  @ApiProperty({ description: '생성 날짜' })
  createdDate: Date;

  @Column
  @ApiProperty({ description: '알림 시간', required: false })
  notificationTime: Date;

  @ForeignKey(() => Goal)
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '목표 ID' })
  goalId: number;

  @BelongsTo(() => Goal, { onDelete: OnDeleteOptions.CASCADE })
  goal: Goal;

  @HasMany(() => Hashtag)
  hashtags: Hashtag[];
}
