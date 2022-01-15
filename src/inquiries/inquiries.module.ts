import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Inquiry } from './models/inquiry.model';
import { InquiriesController } from './inquiries.controller';

@Module({
  imports: [SequelizeModule.forFeature([Inquiry])],
  exports: [SequelizeModule],
  controllers: [InquiriesController]
})
export class InquiriesModule {}
