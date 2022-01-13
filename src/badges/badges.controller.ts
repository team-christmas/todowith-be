import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { Badge } from './models/badge.model';
import { UserBadge } from './models/user-badge.model';

@Controller('badges')
@ApiTags('badges')
@ApiExtraModels(Badge, UserBadge)
export class BadgesController {}
