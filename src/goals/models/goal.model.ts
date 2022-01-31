import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ description: '사용자 ID' })
  userId: number;

  @BelongsTo(() => User, { onDelete: OnDeleteOptions.CASCADE })
  user: User;

  @AllowNull(false)
  @Column
  @ApiProperty({ description: '목표 이름' })
  name: string;

  @AllowNull(false)
  @Default(GoalColors.GRAY)
  @Column({ type: DataType.ENUM({ values: Object.values(GoalColors) }) })
  @ApiProperty({ description: '목표 색상' })
  color: GoalColors;

  @AllowNull(false)
  @Default(GoalPublicOptions.PRIVATE)
  @Column({ type: DataType.ENUM({ values: Object.values(GoalPublicOptions) }) })
  @ApiProperty({
    description: '공개 옵션',
    enum: GoalPublicOptions,
    default: GoalPublicOptions.PRIVATE
  })
  publicOption: GoalPublicOptions;

  @BelongsToMany(() => User, () => UserToShowGoal)
  usersToShow: User[];
}

@Table
export class UserToShowGoal extends Model {
  @PrimaryKey
  @ForeignKey(() => Goal)
  @Column
  @ApiProperty({ description: '목표 ID' })
  goalId: number;

  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  @ApiProperty({ description: '공개할 대상 사용자 ID' })
  userToShowId: number;
}
