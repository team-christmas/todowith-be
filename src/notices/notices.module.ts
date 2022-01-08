import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notice } from './models/notice.model';

@Module({
  imports: [SequelizeModule.forFeature([Notice])],
  exports: [SequelizeModule]
})
export class NoticesModule {}
