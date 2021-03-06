import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
  Unique
} from 'sequelize-typescript';
import { Badge } from 'src/badges/models/badge.model';
import { OnDeleteOptions } from 'src/common/constants';
import { Follow } from 'src/follows/models/follow.model';
import { BoostmodeConfig } from './boostmode-config.model';
import { SocialLoginConfig } from './social-login-config.model';
import { UserConfig } from './user-config.model';

@Table
export class User extends Model {
  @AllowNull(false)
  @Unique
  @Column
  @ApiProperty({ description: '닉네임', uniqueItems: true })
  nickname: string;

  @ForeignKey(() => Badge)
  @Column
  @ApiProperty({ description: '대표 배지 ID', required: false })
  repBadgeId: number;

  @BelongsTo(() => Badge, { onDelete: 'SET NULL' })
  repBadge: Badge;

  @HasOne(() => UserConfig)
  config: UserConfig;

  @HasOne(() => BoostmodeConfig)
  boostmodeConfig: BoostmodeConfig;

  @HasOne(() => SocialLoginConfig)
  socialLoginConfig: SocialLoginConfig;

  @HasMany(() => Follow, { foreignKey: 'follower_id', onDelete: OnDeleteOptions.CASCADE })
  followers: Follow[];

  @HasMany(() => Follow, { foreignKey: 'following_id', onDelete: OnDeleteOptions.CASCADE })
  followings: Follow[];
}
