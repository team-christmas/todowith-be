import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Inquiry } from './models/inquiry.model';

@Module({
  imports: [SequelizeModule.forFeature([Inquiry])],
  exports: [SequelizeModule]
})
export class InquiriesModule {}
