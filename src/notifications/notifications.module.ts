import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notification } from './models/notification.model';
import { NotificationsController } from './notifications.controller';

@Module({
  imports: [SequelizeModule.forFeature([Notification])],
  exports: [SequelizeModule],
  controllers: [NotificationsController]
})
export class NotificationsModule {}
