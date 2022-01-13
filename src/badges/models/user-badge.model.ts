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
  userId: number;

  @BelongsTo(() => User, { onDelete: OnDeleteOptions.CASCADE })
  user: User;

  @PrimaryKey
  @ForeignKey(() => Badge)
  @AllowNull(false)
  @Column
  badgeId: number;

  @BelongsTo(() => Badge, { onDelete: OnDeleteOptions.CASCADE })
  badge: Badge;

  @CreatedAt
  acquiredDate: Date;
}
