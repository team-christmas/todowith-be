import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Badge } from './models/badge.model';
import { UserBadge } from './models/user-badge.model';
import { BadgesController } from './badges.controller';

@Module({
  imports: [SequelizeModule.forFeature([Badge, UserBadge])],
  exports: [SequelizeModule],
  controllers: [BadgesController]
})
export class BadgesModule {}
