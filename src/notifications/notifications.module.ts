import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notification } from './models/notification.model';

@Module({
  imports: [SequelizeModule.forFeature([Notification])],
  exports: [SequelizeModule]
})
export class NotificationsModule {}
