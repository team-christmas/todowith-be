import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  Column,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class BoostmodeConfig extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  @ApiProperty({ description: '사용자 ID' })
  userId: number;

  @AllowNull(false)
  @Default(false)
  @Column
  @ApiProperty({ description: '활성화 여부', default: false })
  isActive: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '2시간 전 알림', default: true })
  is2hBeforeOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '1시간 전 알림', default: true })
  is1hBeforeOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '30분 전 알림', default: true })
  is30mBeforeOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '3분 전 알림', default: true })
  is3mBeforeOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '10분 후 알림', default: true })
  is10mAfterOn: boolean;
}
