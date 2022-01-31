import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNumber, IsString } from 'class-validator';
import { GoalColors, GoalPublicOptions } from 'src/common/constants';

export class CreateGoalDTO {
  @IsNumber()
  @ApiProperty({ description: '사용자 ID' })
  readonly userId: number;

  @IsString()
  @ApiProperty({ description: '목표 이름' })
  readonly name: string;

  @IsIn(Object.values(GoalColors))
  @ApiProperty({ description: '목표 색상', enum: GoalColors, default: GoalColors.GRAY })
  readonly color: GoalColors;

  @IsIn(Object.values(GoalPublicOptions))
  @ApiProperty({
    description: '공개 옵션',
    enum: GoalPublicOptions,
    default: GoalPublicOptions.PRIVATE
  })
  readonly publicOption: GoalPublicOptions;
}
