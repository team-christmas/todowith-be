import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { NotificationTypes, OnDeleteOptions } from 'src/common/constants';
import { User } from 'src/users/models/user.model';

@Table({ updatedAt: false })
export class Notification extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '수신 사용자 ID' })
  userId: number;

  @BelongsTo(() => User, { onDelete: OnDeleteOptions.CASCADE })
  user: User;

  @AllowNull(false)
  @Column
  @ApiProperty({ description: '알림 내용' })
  content: string;

  @AllowNull(false)
  @Column({ type: DataType.ENUM({ values: Object.values(NotificationTypes) }) })
  @ApiProperty({ description: '알림 타입', enum: NotificationTypes })
  type: NotificationTypes;

  @AllowNull(false)
  @Default(false)
  @Column
  @ApiProperty({ description: '열람 여부', default: false })
  isRead: boolean;

  @CreatedAt
  @ApiProperty({ description: '생성 날짜' })
  createdDate: Date;
}
