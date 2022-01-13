import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { Goal, UserToShowGoal } from './models/goal.model';

@Controller('goals')
@ApiTags('goals')
@ApiExtraModels(Goal, UserToShowGoal)
export class GoalsController {}
