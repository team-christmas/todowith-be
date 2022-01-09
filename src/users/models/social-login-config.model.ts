import {
  AllowNull,
  Column,
  ForeignKey,
  IsEmail,
  IsIn,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { SOCIAL_LOGIN_PLATFORMS } from 'src/common/constants';
import { User } from './user.model';

@Table
export class SocialLoginConfig extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @AllowNull(false)
  @IsIn([[SOCIAL_LOGIN_PLATFORMS.KAKAO]])
  @Column
  platform: string;

  @AllowNull(false)
  @IsEmail
  @Column
  email: string;
}
