import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  IsEmail,
  Model,
  Table
} from 'sequelize-typescript';
import { SocialLoginPlatforms } from 'src/common/constants';
import { User } from './user.model';

@Table
export class SocialLoginConfig extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @AllowNull(false)
  @Column({ type: DataType.ENUM({ values: Object.keys(SocialLoginPlatforms) }) })
  platform: SocialLoginPlatforms;

  @AllowNull(false)
  @IsEmail
  @Column
  email: string;
}
