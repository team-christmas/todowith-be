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
  userId: number;

  @AllowNull(false)
  @Default(AppThemes.SYSTEM)
  @Column({ type: DataType.ENUM({ values: Object.keys(AppThemes) }) })
  appTheme: AppThemes;

  @AllowNull(false)
  @Default(false)
  @Column
  isCalendarStartSunday: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  isSortCompletedTodos: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  isNotificationLikesOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  isNotificationFollowingCompletesOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  isShownInExplore: boolean;
}
