import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ description: '사용자 ID' })
  userId: number;

  @AllowNull(false)
  @Column({ type: DataType.ENUM({ values: Object.values(SocialLoginPlatforms) }) })
  @ApiProperty({
    description: '플랫폼',
    enum: SocialLoginPlatforms,
    default: SocialLoginPlatforms.KAKAO
  })
  platform: SocialLoginPlatforms;

  @AllowNull(false)
  @IsEmail
  @Column
  @ApiProperty({ description: '이메일' })
  email: string;
}
