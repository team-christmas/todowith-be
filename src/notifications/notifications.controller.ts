import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { Notification } from './models/notification.model';

@Controller('notifications')
@ApiTags('notifications')
@ApiExtraModels(Notification)
export class NotificationsController {}
