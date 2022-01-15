import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { Follow } from './models/follow.model';

@Controller('follows')
@ApiTags('follows')
@ApiExtraModels(Follow)
export class FollowsController {}
