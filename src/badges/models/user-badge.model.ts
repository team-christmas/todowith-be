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
import { ON_DELETE_OPTIONS } from 'src/common/constants';
import { User } from 'src/users/models/user.model';
import { Badge } from './badge.model';

@Table({ updatedAt: false })
export class UserBadge extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @BelongsTo(() => User, { onDelete: ON_DELETE_OPTIONS.CASCADE })
  user: User;

  @PrimaryKey
  @ForeignKey(() => Badge)
  @AllowNull(false)
  @Column
  badgeId: number;

  @BelongsTo(() => Badge, { onDelete: ON_DELETE_OPTIONS.CASCADE })
  badge: Badge;

  @CreatedAt
  acquiredDate: Date;
}
