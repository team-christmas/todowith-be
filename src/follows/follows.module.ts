import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Follow } from './models/follow.model';
import { FollowsController } from './follows.controller';

@Module({
  imports: [SequelizeModule.forFeature([Follow])],
  exports: [SequelizeModule],
  controllers: [FollowsController]
})
export class FollowsModule {}
