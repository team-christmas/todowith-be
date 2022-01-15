import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { OnDeleteOptions } from 'src/common/constants';
import { User } from 'src/users/models/user.model';
import { Badge } from './badge.model';

@Table({ updatedAt: false })
export class UserBadge extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '사용자 ID' })
  userId: number;

  @BelongsTo(() => User, { onDelete: OnDeleteOptions.CASCADE })
  user: User;

  @PrimaryKey
  @ForeignKey(() => Badge)
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '배지 ID' })
  badgeId: number;

  @BelongsTo(() => Badge, { onDelete: OnDeleteOptions.CASCADE })
  badge: Badge;

  @CreatedAt
  @ApiProperty({ description: '획득 날짜' })
  acquiredDate: Date;
}
