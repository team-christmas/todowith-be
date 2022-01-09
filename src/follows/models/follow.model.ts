import {
  AllowNull,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { User } from 'src/users/models/user.model';

@Table
export class Follow extends Model {
  @ForeignKey(() => User)
  @Column
  followerId: number;

  @BelongsTo(() => User, 'follower_id')
  follower: User;

  @ForeignKey(() => User)
  @Column
  followingId: number;

  @BelongsTo(() => User, 'following_id')
  following: User;

  @AllowNull(false)
  @Default(true)
  @Column
  isNotificationOn: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  isApproved: boolean;

  @Column
  order: string;
}
