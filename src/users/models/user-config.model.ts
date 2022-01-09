import {
  AllowNull,
  Column,
  Default,
  ForeignKey,
  IsIn,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { User } from './user.model';
import { APP_THEMES } from 'src/common/constants';

@Table
export class UserConfig extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  userId: number;

  @AllowNull(false)
  @IsIn([[APP_THEMES.SYSTEM, APP_THEMES.LIGHT, APP_THEMES.DARK]])
  @Default(APP_THEMES.SYSTEM)
  @Column
  appTheme: string;

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
