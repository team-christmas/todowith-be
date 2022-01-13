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
  userId: number;

  @BelongsTo(() => User, { onDelete: OnDeleteOptions.CASCADE })
  user: User;

  @AllowNull(false)
  @Column
  content: string;

  @AllowNull(false)
  @Column({ type: DataType.ENUM({ values: Object.keys(NotificationTypes) }) })
  type: NotificationTypes;

  @AllowNull(false)
  @Default(false)
  @Column
  isRead: boolean;

  @CreatedAt
  createdDate: Date;
}
