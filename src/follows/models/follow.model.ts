import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  BelongsTo,
  Column,
  Default,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { User } from 'src/users/models/user.model';

@Table
export class Follow extends Model {
  @ForeignKey(() => User)
  @Column
  @ApiProperty({ description: '팔로워 사용자 ID' })
  followerId: number;

  @BelongsTo(() => User, 'follower_id')
  follower: User;

  @ForeignKey(() => User)
  @Column
  @ApiProperty({ description: '팔로잉 사용자 ID' })
  followingId: number;

  @BelongsTo(() => User, 'following_id')
  following: User;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '알림 여부', default: true })
  isNotificationOn: boolean;

  @AllowNull(false)
  @Default(false)
  @Column
  @ApiProperty({ description: '승인 여부', default: false })
  isApproved: boolean;

  @Column
  @ApiProperty({ description: '순서', required: false })
  order: string;
}
