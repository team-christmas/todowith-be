import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { Notice } from './models/notice.model';

@Controller('notices')
@ApiTags('notices')
@ApiExtraModels(Notice)
export class NoticesController {}
