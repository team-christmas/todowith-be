import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  Default,
  ForeignKey,
  IsIn,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { GOAL_COLORS, GOAL_PUBLIC_OPTIONS, ON_DELETE_OPTIONS } from 'src/common/constants';
import { User } from 'src/users/models/user.model';

@Table
export class Goal extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @BelongsTo(() => User, { onDelete: ON_DELETE_OPTIONS.CASCADE })
  user: User;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @IsIn([[GOAL_COLORS.GRAY]])
  @Default(GOAL_COLORS.GRAY)
  @Column
  color: string;

  @AllowNull(false)
  @IsIn([
    [GOAL_PUBLIC_OPTIONS.FULL_PUBLIC, GOAL_PUBLIC_OPTIONS.SOME_PUBLIC, GOAL_PUBLIC_OPTIONS.PRIVATE]
  ])
  @Default(GOAL_PUBLIC_OPTIONS.PRIVATE)
  @Column
  publicOption: string;

  @BelongsToMany(() => User, () => UserToShowGoal)
  usersToShow: User[];
}

@Table
export class UserToShowGoal extends Model {
  @PrimaryKey
  @ForeignKey(() => Goal)
  @Column
  goalId: number;

  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  userToShowId: number;
}
