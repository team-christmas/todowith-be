import {
  AllowNull,
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { GoalColors, GoalPublicOptions, OnDeleteOptions } from 'src/common/constants';
import { User } from 'src/users/models/user.model';

@Table
export class Goal extends Model {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @BelongsTo(() => User, { onDelete: OnDeleteOptions.CASCADE })
  user: User;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Default(GoalColors.GRAY)
  @Column({ type: DataType.ENUM({ values: Object.keys(GoalColors) }) })
  color: GoalColors;

  @AllowNull(false)
  @Default(GoalPublicOptions.PRIVATE)
  @Column({ type: DataType.ENUM({ values: Object.keys(GoalPublicOptions) }) })
  publicOption: GoalPublicOptions;

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
