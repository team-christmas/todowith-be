import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notice } from './models/notice.model';
import { NoticesController } from './notices.controller';

@Module({
  imports: [SequelizeModule.forFeature([Notice])],
  exports: [SequelizeModule],
  controllers: [NoticesController]
})
export class NoticesModule {}
