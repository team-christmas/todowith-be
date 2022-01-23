import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { AppThemes } from 'src/common/constants';
import { User } from './user.model';

@Table
export class UserConfig extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  @ApiProperty({ description: '사용자 ID' })
  userId: number;

  @AllowNull(false)
  @Default(AppThemes.SYSTEM)
  @Column({ type: DataType.ENUM({ values: Object.values(AppThemes) }) })
  @ApiProperty({ description: '앱 테마', enum: AppThemes, default: AppThemes.SYSTEM })
  appTheme: AppThemes;

  @AllowNull(false)
  @Default(false)
  @Column
  @ApiProperty({ description: '달력 시작 요일', default: false })
  isCalendarStartSunday: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '완료한 할 일 정렬', default: true })
  isSortCompletedTodos: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '좋아요 소식 알림', default: true })
  isNotificationLikesOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '팔로잉 완료 알림', default: true })
  isNotificationFollowingCompletesOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  @ApiProperty({ description: '둘러보기에서 나타나기', default: true })
  isShownInExplore: boolean;
}
