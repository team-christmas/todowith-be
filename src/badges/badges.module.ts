import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Badge } from './models/badge.model';
import { UserBadge } from './models/user-badge.model';

@Module({
  imports: [SequelizeModule.forFeature([Badge, UserBadge])],
  exports: [SequelizeModule]
})
export class BadgesModule {}
