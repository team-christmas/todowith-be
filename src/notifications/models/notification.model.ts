import {
  AllowNull,
  BelongsTo,
  Column,
  CreatedAt,
  Default,
  ForeignKey,
  IsIn,
  Model,
  Table
} from 'sequelize-typescript';
import { NOTIFICATION_TYPES, ON_DELETE_OPTIONS } from 'src/common/constants';
import { User } from 'src/users/models/user.model';

@Table({ updatedAt: false })
export class Notification extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @BelongsTo(() => User, { onDelete: ON_DELETE_OPTIONS.CASCADE })
  user: User;

  @AllowNull(false)
  @Column
  content: string;

  @AllowNull(false)
  @IsIn([[NOTIFICATION_TYPES.LIKES_RECEIVED, NOTIFICATION_TYPES.FOLLOWING_COMPLETES]])
  @Column
  type: string;

  @AllowNull(false)
  @Default(false)
  @Column
  isRead: boolean;

  @CreatedAt
  createdDate: Date;
}
